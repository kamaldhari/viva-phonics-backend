export const userProjectionFields = {
    firstName: 1,
    lastName: 1,
    emailId: 1,
    userType: 1,
    resetPassword: 1,
    password: 1,
    sessionmetadata: 1,
    createdAt: 1,
    updatedAt: 1,
    tokens: 1,
    _id: 1,
    metadata: 1,
};

export const tutorProjectionFields = {
    firstName: 1,
    lastName: 1,
    email: 1,
    userType: 1,
    countryCode: 1,
    number: 1,
    address: 1,
    city: 1,
    state: 1,
    postalCode: 1,
    country: 1,
    rate: 1,
    timeZone: 1,
    availability: 1,
    isDeleted: 1,
};

export const studentProjectionFields = {
    userType: 1,
    studentNumber: 1,
    firstName: 1,
    lastName: 1,
    familyName: 1,
    grade: 1,
    year: 1,
    email: 1,
    countryCode: 1,
    number: 1,
    address: 1,
    city: 1,
    state: 1,
    postalCode: 1,
    country: 1,
    startDate: 1,
    dischargeDate: 1,
    referralSource: 1,
    meetingLink: 1,
    isDeleted: 1,
    status: 1,
    tutor: 1,
    payment: 1,
    leaves: 1,
    extendedBrakes: 1,
};
