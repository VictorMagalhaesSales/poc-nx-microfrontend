import { Subject } from "rxjs";

export interface RemoteDialogComponent {
    title: string;
    hideModalEmitter: Subject<void>;

    openModal: () => void;
    closeModal: () => void;
}