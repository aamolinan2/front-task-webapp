export interface FirestoreTask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: { _seconds: number; _nanoseconds: number };
}