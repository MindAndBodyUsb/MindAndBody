

export interface Login {
  success: boolean;
  message: string;
  statusCode?: number | null;
  token?: string | null;
}

export interface Register {
  success: boolean;
  message: string;
  statusCode?: number | null;
}


export interface ProfileInfo {
  name: string;
  email: string,
  uid: string
}