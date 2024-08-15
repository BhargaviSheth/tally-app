export interface GetTokenBody {
  idToken: string;
}

export interface GetTokenResponse {
  access_token: string;
  billing_preference: BillingPreferenceType;
  phone_no: string;
  plan_details: PlanDetails;
  refresh_token: string;
}

export interface BillingPreferenceType {
  address_line_1?: string;
  address_line_2?: string;
  city?: string;
  company_gst: string;
  company_name: string;
  country?: string;
  pincode: string;
  state?: string;
}

export interface PlanDetails {
  days_left: number;
  status: string;
  total_days: number;
}

export interface PlanDetails {
  days_left: number;
  total_days: number;
  status: string;
}

export interface UserLoginDetails {
  phone_no?: string;
  days_left?: number;
  total_days?: number;
  status?: string;
}

export interface SendOtpBody {
  phone_number: string;
}
export interface SendOtpResponse {
  message: string;
}
export interface VerifyOtpBody {
  phone_number: string;
  otp: string;
}
export interface VerifyOtpResponse {
  message: string;
}
