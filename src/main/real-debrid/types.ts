
export interface AuthorizatioInfo {
    client_id: string;
    client_secret: string;
    access_token: string;
    refresh_token: string;
}

export type TorrentId = string;
export interface Torrent {
    id: TorrentId;
    filename: string;
    hash: string;
    bytes: number;
    host: string;
    split: number;
    progress: number;
    status: Status;
    added: Date;
    files: File[];
    links: string[];
    ended?: Date;
    speed?: number;
    seeders?: number;
}

export interface File {
    id:       number;
    path:     string;
    bytes:    number;
    selected: number;
}


export enum Status {
    magnet_error = "magnet_error",
    magnet_conversion = "magnet_conversion",
    waiting_files_selection = "waiting_files_selection",
    queued = "queued",
    downloading = "downloading",
    downloaded = "downloaded",
    error = "error",
    virus = "virus",
    compressing = "compressing",
    uploading = "uploading",
    dead = "dead",
}
export interface LinkInfo {
    id:         string;
    filename:   string;
    mimeType:   string;
    filesize:   number;
    link:       string;
    host:       string;
    host_icon:  string;
    chunks:     number;

    download:   string;
    streamable: number;
}