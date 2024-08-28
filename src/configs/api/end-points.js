export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const HOME_PAGE_ENDPOINT = "seeker/home";
export const DROPDOWN_LIST_ENDPOINT = "drop-down-list";

export const HEADER_ENDPOINT = "header-data";
export const FOOTER_ENDPOINT = "footer-data";
export const CONTENT_PAGES_ENDPOINT = "content-page-detail";

export const JOBS_DETAIL_ENDPOINT = "jobs";
export const JOBS_BY_LOCATION_ENDPOINT = "job-by-location";
export const BLOG_LIST_ENDPOINT = "blog-list";

// Authentication Endpoints
export const LOGIN_ENDPOINT = "buyer/login";
export const REGISTER_ENDPOINT = "register";
export const FORGOT_PASSWORD_ENDPOINT = "forgot-password";
export const VERIFY_LINK_FORGOT_PASSWORD_ENDPOINT =
  "verify-link-forgot-password";
export const UPDATE_FORGOT_PASSWORD_ENDPOINT = "update-forgot-password";

// Profile Endpoints
export const GET_USER_PROFILE_ENDPOINT = "seeker/profile";
export const UPDATE_PROFILE_ENDPOINT = "/seeker/profile-update";
export const DELETE_ALL_PROFILE_ENDPOINT = "/seeker/profile-chunk-remove";
export const DELETE_PROFILE_ENDPOINT = "/seeker/profile-specific-chunk-remove";
export const EMAIL_SUBSCRIBE_ENDPOINT = "/seeker/email-subscriber-form";
export const DELETE_PROFILE_VALUE_ENDPOINT =
  "/seeker/profile-specific-value-remove";
export const UPLOAD_RESUME_ENDPOINT = "/seeker/upload-resume";
export const REMOVE_RESUME_ENDPOINT = "/seeker/remove-resume";

// Job Endpoints
export const JOB_APPLY_ENDPOINT = "seeker/job-application";
export const GET_JOB_LISTING_ENDPOINT = "seeker/public-job-listing";
export const GET_RECOMMENDED_JOB_ENDPOINT = "seeker/public-recommended-jobs";
export const GET_SAVED_JOB_LIST_ENDPOINT = "seeker/saved-jobs-list";
export const GET_JOB_APPLICATIONS_LIST_ENDPOINT =
  "seeker/job-applications-list";
export const GET_JOB_ALERT_LIST_ENDPOINT = "seeker/job-alerts-list";
export const GET_JOB_DETAIL_BY_ID_ENDPOINT = "seeker/public-job-detail";
export const ADD_TO_SAVED_JOB_ENDPOINT = "seeker/save-job";
export const REMOVED_FROM_SAVED_JOB_ENDPOINT = "seeker/remove-save-job";
export const CREATE_JOB_ALERT_ENDPOINT = "/seeker/job-alerts";

// Job Endpoints
export const GET_COMPANY_LISTING_ENDPOINT = "seeker/company-listing";
export const GET_COMPANY_DETAIL_BY_ID_ENDPOINT = "seeker/company-detail";
export const GET_COMPANY_FOLLOW_UNFOLLOW_BY_ID_ENDPOINT =
  "seeker/company-follow-unfollow";
export const DISCIPLINE_LIST_ENDPOINT = "disciplines-list";
export const POST_CONTACT_FORM_ENDPOINT = "contact-form";
export const SEARCH_JOB_ENDPOINT = "search-jobs";
export const CHECK_JOB_ENDPOINT = "/user/job-apply-check";
// export const JOB_APPLY_ENDPOINT = "/user/apply-job";
export const USER_PROFILE_DETAILS_ENDPOINT = "profile-detail";
export const POST_EMAIL_CONTACT_FORM_ENDPOINT = "email-contact-form";
export const RESET_PASSWORD_ENDPOINT = "/user/update-password";
export const REMOVE_LICENSE_ENDPOINT = "/user/remove-license";

// Social login keys
export const GOOGLE_AUTH_ID =
  "784265999000-35kvoer0vmt6khq8v56evu57up2j72bs.apps.googleusercontent.com";
export const FACEBOOK_AUTH_ID = "5944935502242615";
export const LINKEDIN_AUTH_ID = "77cfs7kl2p464q";
export const LINKEDIN_CLIENT_SECRET = "6uJdDLpwRf5c9oEX";
