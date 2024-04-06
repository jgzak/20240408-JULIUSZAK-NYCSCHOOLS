export interface NYCSchool {
    school_name: string;
    dbn: string;
}

export interface NYCSchoolDetails extends NYCSchool {
    school_email: string;
    phone_number: string;
    website: string;
    primary_address_line_1: string;
    city: string;
    state_code: string;
    zip: string;
    borough: string;
    academicopportunities1: string;
    academicopportunities2: string;
    academicopportunities3: string;
    admissionspriority11: string;
    admissionspriority21: string;
    admissionspriority31: string;
    advancedplacement_courses: string;
    attendance_rate: string;
    bbl: string;
    bin: string;
    boro: string;
    building_code: string;
    bus: string;
    campus_name: string;
    census_tract: string;
    code1: string;
    college_career_rate: string;
    community_board: string;
    council_district: string;
    dbn: string;
    ell_programs: string;
    end_time: string;
    extracurricular_activities: string;
    fax_number: string;
    finalgrades: string;
    grade9geapplicants1: string;
    grade9geapplicantsperseat1: string;
    grade9gefilledflag1: string;
    grade9swdapplicants1: string;
    grade9swdapplicantsperseat1: string;
    grade9swdfilledflag1: string;
    grades2018: string;
    graduation_rate: string;
    interest1: string;
    language_classes: string;
    latitude: string;
    location: string;
    longitude: string;
    method1: string;
    neighborhood: string;
    nta: string;
    offer_rate1: string;
    overview_paragraph: string;
    pct_stu_enough_variety: string;
    pct_stu_safe: string;
    program1: string;
    psal_sports_boys: string;
    psal_sports_coed: string;
    psal_sports_girls: string;
    school_accessibility_description: string;
    school_name: string;
    seats9ge1: string;
    seats9swd1: string;
    seats101: string;
    shared_space: string;
    start_time: string;
    subway: string;
    total_students: string;
}

export interface InputProps {
    selectedSchool: NYCSchool | null;
    initView: boolean;
}


export interface SATScoresForSchool {
    dbn: string;
    school_name: string;
    num_of_sat_test_takers: string;
    sat_critical_reading_avg_score: string;
    sat_math_avg_score: string;
    sat_writing_avg_score: string;
}

