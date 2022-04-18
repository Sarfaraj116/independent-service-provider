import React from 'react';

const Blogs = () => {
    return (
        <div className='container text-center'>
            <h2 className='text-center mb-4'>My blogs</h2>
            <h3>Difference between authorization and authentication?</h3>
            <p>Authentication: Authentication ব্যবহারকারী কে তা যাচাই করে। পাসওয়ার্ড, ওয়ান-টাইম পিন, বায়োমেট্রিক তথ্য এবং ব্যবহারকারীর দ্বারা প্রদত্ত বা প্রবেশ করা অন্যান্য তথ্যের মাধ্যমে Authentication কাজ করে। Authentication হল একটি ভাল পরিচয় এবং অ্যাক্সেস ব্যবস্থাপনা প্রক্রিয়ার প্রথম ধাপ। Authentication দৃশ্যমান এবং আংশিকভাবে ব্যবহারকারী দ্বারা পরিবর্তনযোগ্য।</p>
            <p>Authorization: Authorization নির্ধারণ করে একজন ব্যবহারকারী কোন সংস্থানগুলি অ্যাক্সেস করতে পারে৷ Authorization সংস্থার দ্বারা বাস্তবায়িত এবং রক্ষণাবেক্ষণ করা সেটিংসের মাধ্যমে কাজ করে৷ Authorization সর্বদা প্রমাণীকরণের পরে সঞ্চালিত হয়৷ Authorization ব্যবহারকারীর কাছে দৃশ্যমান বা পরিবর্তনযোগ্য নয়৷</p>

            <h3> Why are you using firebase? </h3>
            <p>ফায়ারবেস ডায়নামিক অ্যাপের জন্য পূর্ণাঙ্গ ব্যাকএন্ড কোড লেখার একটি কম প্রযুক্তিগত এবং সময় সাশ্রয়ী বিকল্প।

                আপনি যদি শেষ পর্যন্ত ক্লাউডে আপনার অ্যাপটি হোস্ট এবং পরিচালনা করতে চান তবে আপনি এই টুলটি ব্যবহার করার বিষয়েও বিবেচনা করতে পারেন। সার্ভারহীন হওয়ায়, ফায়ারবেস ক্লাউড সার্ভার কনফিগারেশনের প্রযুক্তিগত বিষয়ে চিন্তা করার প্রয়োজনীয়তা দূর করে।

                একটি Google ক্লাউড পরিষেবা হিসাবে, এটি আপনাকে Google ড্রাইভ এবং পত্রকের মতো অন্যান্য Google পণ্য এবং বৈশিষ্ট্যগুলিতে অ্যাক্সেস দেয়৷ উদাহরণস্বরূপ, আপনি Google পত্রক থেকে ডামি ডেটা আমদানি করতে পারেন এবং আপনার অ্যাপ পরিবেশন করতে অস্থায়ীভাবে এটি ব্যবহার করতে পারেন।</p>
            <h3>What other options do you have to implement authentication?</h3>
            <p>1.OneLogin,
                2.JumpCloud,
                3.Microsoft Azure Active Directory,
                4.CyberArk Identity,
                5.Auth0,
                6.Rippling,
                7.SecureAuth Identity Platform,
                8.ForgeRock,
                9.Okta</p>
            <h3>What other services does firebase provide other than authentication?</h3>
            <p> 1.Cloud Firestore,
                2.Cloud Functions,
                3.Authentication,
                4.Hosting,
                5.Cloud Storage,
                6.Google Analytics,
                7.Predictions,
                8.Cloud Messaging</p>
        </div>
    );
};

export default Blogs;