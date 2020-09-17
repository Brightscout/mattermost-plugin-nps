// This file is automatically generated. Do not modify it manually.

const manifest = JSON.parse(`
{
    "id": "com.mattermost.nps",
    "name": "User Satisfaction Surveys",
    "description": "This plugin sends quarterly user satisfaction surveys to gather feedback and help improve Mattermost.",
    "homepage_url": "https://github.com/mattermost/mattermost-plugin-nps",
    "support_url": "https://github.com/mattermost/mattermost-plugin-nps/issues",
    "icon_path": "assets/icon.svg",
    "version": "1.1.0",
    "min_server_version": "5.16.0",
    "server": {
        "executables": {
            "linux-amd64": "server/dist/plugin-linux-amd64",
            "darwin-amd64": "server/dist/plugin-darwin-amd64",
            "windows-amd64": "server/dist/plugin-windows-amd64.exe"
        },
        "executable": ""
    },
    "webapp": {
        "bundle_path": "webapp/dist/main.js"
    },
    "settings_schema": {
        "header": "Mattermost sends user satisfaction surveys to gather feedback and improve product quality. [Learn more](!https://mattermost.com/pl/default-nps) about user satisfaction surveys.",
        "footer": "",
        "settings": [
            {
                "key": "EnableSurvey",
                "display_name": "Enable User Satisfaction Survey",
                "type": "bool",
                "help_text": "When true, a [user satisfaction survey](!https://mattermost.com/pl/default-nps) will be sent to all users quarterly. The survey results will be used by Mattermost, Inc. to improve the quality and user experience of the product. Please refer to our [privacy policy](!https://about.mattermost.com/default-privacy-policy) for more information on the collection and use of information received through our services.",
                "placeholder": "",
                "default": true
            }
        ]
    }
}
`);

export default manifest;
export const id = manifest.id;
export const version = manifest.version;
