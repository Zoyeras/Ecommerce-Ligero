// api/logo.ts
import { google } from 'googleapis';

const getHighResDriveImage = (file: { id: string; thumbnailLink?: string }) => {
    if (file.thumbnailLink) {
        const cleanThumb = file.thumbnailLink.split('?')[0];
        return cleanThumb.replace(/=s\d+(-[a-z])?$/i, '=s1600');
    }
    return `https://drive.google.com/thumbnail?id=${file.id}&sz=w1600`;
};

export default async function handler(req: any, res: any) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const requiredEnvVars = [
            'GOOGLE_PROJECT_ID',
            'GOOGLE_PRIVATE_KEY_ID',
            'GOOGLE_PRIVATE_KEY',
            'GOOGLE_CLIENT_EMAIL',
            'GOOGLE_CLIENT_ID',
            'DRIVE_FOLDER_ID',
        ];
        const missingVars = requiredEnvVars.filter(v => !process.env[v]);
        if (missingVars.length > 0) {
            console.error('Missing env vars:', missingVars);
            return res.status(500).json({ error: 'Missing configuration', missing: missingVars });
        }

        const credentials = {
            type: 'service_account',
            project_id: process.env.GOOGLE_PROJECT_ID,
            private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
            private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            client_id: process.env.GOOGLE_CLIENT_ID,
            auth_uri: 'https://accounts.google.com/o/oauth2/auth',
            token_uri: 'https://oauth2.googleapis.com/token',
        };

        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        });
        const drive = google.drive({ version: 'v3', auth });
        const folderId = process.env.DRIVE_FOLDER_ID!;

        // Buscar archivo con "logo" en el nombre (insensible)
        const query = `'${folderId}' in parents and name contains 'logo' and mimeType contains 'image/' and trashed=false`;
        const response = await drive.files.list({
            q: query,
            fields: 'files(id, name, thumbnailLink)',
            pageSize: 1,
            orderBy: 'name',
        });

        const files = response.data.files;
        if (!files || files.length === 0) {
            return res.status(404).json({ error: 'No logo found' });
        }

        const logoFile = files[0];
        const logoUrl = getHighResDriveImage(logoFile);
        res.status(200).json({ logoUrl });
    } catch (error: any) {
        console.error('Error fetching logo:', error);
        res.status(500).json({ error: 'Error fetching logo', details: error.message });
    }
}