// import {app} from 'electron';

export type AutoDeleteTorrentFileOption = 'never' | 'torrent_added' | 'torrent_completed' | 'download_completed';
export type State = ({
  readonly torrentFilesAssociated: boolean;
  readonly magnetLinksAssociated: boolean;
  readonly autoDeleteServer: boolean;
  readonly autoDeleteTorrentFile: AutoDeleteTorrentFileOption;
  readonly fileWhiteList: readonly string[];
  readonly fileBlackList: readonly string[];
  readonly autoDownloadTorrents: boolean;
  readonly downloadLocation: string;
  readonly autoSubmitAutoSelectedFiles: boolean;
}) &
  (
    | {
        readonly autoSelectFiles: 'none' | 'all_files' | 'largest_files';
      }
    | {
        readonly autoSelectFiles: 'pattern';
        readonly autoSelectFilesPattern: string;
      }
    | {});

export const defaultState: State = {
  downloadLocation: '', // app.getPath('downloads'),
  torrentFilesAssociated: false,
  magnetLinksAssociated: false,
  autoDownloadTorrents: true,
  autoDeleteServer: true,
  autoDeleteTorrentFile: 'torrent_added',
  autoSelectFiles: 'all_files',
  autoSubmitAutoSelectedFiles: false,
  fileWhiteList: [],
  fileBlackList: [],
};

export default State;
