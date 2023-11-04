import {Analyze, AnalyzeData, Profile, Review} from '../app/pages/campaign/interfaces/profile.interface';
import {DisclosurePDF} from '../app/pages/system/disclosure/disclosure.component';
import {Offer, Proposal} from '../app/providers/campaign.service';

export const profileData: Profile[] = [
    {
        id: 1,
        profile_bg: 'assets/img/demo/profile-bg-01.jpg',
        photo_img: 'assets/img/demo/profile-photo-01.png',
        name: 'Kaitlyn Kristy',
        userid: 'Kaitlyn_Kristy2',
        socials: ['instagram', 'facebook', 'youtube'],
        gender: 'female',
        ages: [18, 25],
        sayings: 'I love taking pictures and enjoy experiencing a new journey in my life. I’ll be happy if I work with you!Check my new video in Youtube! Link',
        video: 'youtube.com/23sskaitlyn',
        categories: ['fashion', 'travel', 'books'],
        acheivedCampaign: 56,
        followers: 2500,
        followers_change: 0.3,
        posts: 30,
        hotness: 99,
        price: '50-60',
        favorited: false,
    },
    {
        id: 2,
        profile_bg: 'assets/img/demo/profile-bg-02.jpg',
        photo_img: 'assets/img/demo/profile-photo-02.png',
        name: 'Carla Houston',
        userid: 'Carla_Houston_1',
        socials: ['instagram', 'facebook'],
        gender: 'female',
        ages: [18, 25],
        sayings: 'I love taking pictures and enjoy experiencing a new journey in my life. I’ll be happy if I work with you!Check my new video in Youtube! Link',
        video: '',
        categories: ['beauty', 'travel', 'books', 'fashion'],
        acheivedCampaign: 10,
        followers: 1700,
        followers_change: -0.2,
        posts: 100,
        hotness: 88,
        price: '50-60',
        favorited: true,
    },
    // {
    //     id: 3,
    //     profile_bg: 'assets/img/demo/profile-bg-03.jpg',
    //     photo_img: 'assets/img/demo/profile-photo-03.png',
    //     name: 'Samantha Smith',
    //     userid: 'Samantha_Smith1090',
    //     socials: ['instagram', 'facebook', 'youtube'],
    //     gender: 'female',
    //     ages: [18, 25],
    //     sayings: 'I love taking pictures and enjoy experiencing a new journey in my life. I’ll be happy if I work with you!Check my new video in Youtube! Link',
    //     video: '',
    //     categories: ['travel', 'sports'],
    //     acheivedCampaign: 10,
    //     followers: 1400,
    //     followers_change: 0.5,
    //     posts: 100,
    //     hotness: 98,
    //     price: '50-60',
    //     favorited: false,
    // },
    // {
    //     id: 4,
    //     profile_bg: 'assets/img/demo/profile-bg-04.jpg',
    //     photo_img: 'assets/img/demo/profile-photo-04.png',
    //     name: 'Mocha',
    //     userid: 'Mocha_life_1010',
    //     socials: ['instagram', 'facebook'],
    //     gender: 'male',
    //     ages: [20, 25],
    //     sayings: 'I love taking pictures and enjoy experiencing a new journey in my life. I’ll be happy if I work with you!Check my new video in Youtube! Link',
    //     video: '',
    //     categories: ['beauty', 'travel', 'books'],
    //     acheivedCampaign: 10,
    //     followers: 1600,
    //     followers_change: -0.4,
    //     posts: 100,
    //     hotness: 88,
    //     price: '50-60',
    //     favorited: false,
    // },
    // {
    //     id: 5,
    //     profile_bg: 'assets/img/demo/profile-bg-04.jpg',
    //     photo_img: 'assets/img/demo/profile-photo-05.jpg',
    //     name: 'Mccormick Ferguson',
    //     userid: 'Mccormick_1210',
    //     socials: ['instagram', 'facebook'],
    //     gender: 'female',
    //     ages: [20, 25],
    //     sayings: 'I love taking pictures and enjoy experiencing a new journey in my life. I’ll be happy if I work with you!Check my new video in Youtube! Link',
    //     video: '',
    //     categories: ['beauty', 'travel', 'books'],
    //     acheivedCampaign: 10,
    //     followers: 1600,
    //     followers_change: -0.4,
    //     posts: 100,
    //     hotness: 88,
    //     price: '50-60',
    //     favorited: false,
    // },
    // {
    //     id: 6,
    //     profile_bg: 'assets/img/demo/profile-bg-02.jpg',
    //     photo_img: 'assets/img/demo/profile-photo-06.jpg',
    //     name: 'Guerrero Morales',
    //     userid: 'Guerrero_3010',
    //     socials: ['instagram', 'facebook'],
    //     gender: 'female',
    //     ages: [20, 25],
    //     sayings: 'I love taking pictures and enjoy experiencing a new journey in my life. I’ll be happy if I work with you!Check my new video in Youtube! Link',
    //     video: '',
    //     categories: ['beauty', 'travel', 'books'],
    //     acheivedCampaign: 10,
    //     followers: 1000,
    //     followers_change: -0.4,
    //     posts: 100,
    //     hotness: 90,
    //     price: '50-60',
    //     favorited: false,
    // },
    // {
    //     id: 8,
    //     profile_bg: 'assets/img/demo/profile-bg-02.jpg',
    //     photo_img: 'assets/img/demo/profile-photo-07.jpg',
    //     name: 'Annie Batford',
    //     userid: 'annie_batford',
    //     socials: ['instagram', 'facebook'],
    //     gender: 'female',
    //     ages: [20, 25],
    //     sayings: 'I love taking pictures and enjoy experiencing a new journey in my life. I’ll be happy if I work with you!Check my new video in Youtube! Link',
    //     video: '',
    //     categories: ['beauty', 'travel', 'books'],
    //     acheivedCampaign: 10,
    //     followers: 1000,
    //     followers_change: -0.4,
    //     posts: 100,
    //     hotness: 90,
    //     price: '50-60',
    //     favorited: false,
    // },
];
export const pdfsData: DisclosurePDF[] = [
    {
        id: 1,
        doc_title: 'Privacy Policy',
        path: '../../assets/disclosure/privacy-policy.pdf',
    },
    {
        id: 2,
        doc_title: 'User Agreement',
        path: '../../assets/disclosure/user-agreement.pdf',
    },
    {
        id: 3,
        doc_title: 'Terms and Conditions',
        path: '../../assets/disclosure/terms-and-conditions.pdf',
    },
    {
        id: 4,
        doc_title: 'ACH Authorization Agreement',
        path: '../../assets/disclosure/fee-and-ach-authorization-agreement.pdf',
    }
];
export const reviewsData: Review[] = [
    {
        review_id: 3,
        profile_id: 1,
        reviewer: 'Mocha',
        review_date: '09/10/2020',
        review_title: 'Nike Running Shoes- static code1',
        summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
        rating: 4.8,
        platform: 'instagram',
        rating_values: [5, 4.4, 5, 5],
    },
    {
        review_id: 4,
        profile_id: 1,
        reviewer: 'Mocha',
        review_date: '09/20/2020',
        review_title: '[Nike] Nike Air Max 1- static code2',
        summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
        rating: 4,
        platform: 'facebook',
        rating_values: [5, 5, 3, 3],
    },
    {
        review_id: 1,
        profile_id: 7,
        reviewer: 'Carla Houston',
        review_date: '09/02/2020',
        review_title: '[Nike] Nike Air Max 1',
        summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
        rating: 4.7,
        platform: 'facebook',
        rating_values: [5, 4, 4.8, 5],
    },
    {
        review_id: 2,
        profile_id: 7,
        reviewer: 'Carla Houston',
        review_date: '08/02/2020',
        review_title: 'Adidas Sport Hat',
        summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
        rating: 5,
        platform: 'instagram',
        rating_values: [5, 5, 5, 5],
    },
    
    {
        review_id: 5,
        profile_id: 3,
        reviewer: 'Mocha',
        review_date: '09/20/2020',
        review_title: '[Nike] Nike Air Max 1',
        summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
        rating: 4.8,
        platform: 'facebook',
        rating_values: [5, 5, 4.4, 5],
    },
    {
        review_id: 6,
        profile_id: 4,
        reviewer: 'Mocha',
        review_date: '09/20/2020',
        review_title: '[Nike] Nike Air Max 1',
        summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
        rating: 5,
        platform: 'facebook',
        rating_values: [5, 5, 5, 5],
    },
    {
        review_id: 7,
        profile_id: 2,
        reviewer: 'Mocha',
        review_date: '09/20/2020',
        review_title: '[Nike] Nike Air Max 1',
        summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
        rating: 4.8,
        platform: 'facebook',
        rating_values: [5, 5, 4.4, 5],
    },
];

export const analysisData: Analyze[] = [
    {
        profile_id: 1,
        platform: 'facebook',
        followers: {
            value: 2500,
            change: 0.3,
        },
        likes: {
            value: 910,
            change: 0.3,
        },
        posting: {
            value: 100,
            change: -0.3,
        },
        comments: {
            value: 900,
            change: -0.2,
        },
        rate: {
            value: 99,
        },
        post_urls: [],
    },
    {
        profile_id: 1,
        platform: 'instagram',
        followers: {
            value: 4500,
            change: -0.6,
        },
        likes: {
            value: 310,
            change: 0.2,
        },
        posting: {
            value: 200,
            change: -0.3,
        },
        comments: {
            value: 800,
            change: -0.2,
        },
        rate: {
            value: 89,
        },
        post_urls: [],
    },
    {
        profile_id: 2,
        platform: 'facebook',
        followers: {
            value: 2500,
            change: 0.3,
        },
        likes: {
            value: 910,
            change: 0.3,
        },
        posting: {
            value: 100,
            change: -0.3,
        },
        comments: {
            value: 900,
            change: -0.2,
        },
        rate: {
            value: 99,
        },
        post_urls: [],
    },
    {
        profile_id: 2,
        platform: 'instagram',
        followers: {
            value: 4500,
            change: -0.6,
        },
        likes: {
            value: 310,
            change: 0.2,
        },
        posting: {
            value: 200,
            change: -0.3,
        },
        comments: {
            value: 800,
            change: -0.2,
        },
        rate: {
            value: 89,
        },
        post_urls: [],
    },
    {
        profile_id: 1,
        platform: 'youtube',
        followers: {
            value: 1500,
            change: 0.3,
        },
        likes: {
            value: 810,
            change: 0.3,
        },
        posting: {
            value: 90,
            change: -0.3,
        },
        comments: {
            value: 200,
            change: -0.2,
        },
        rate: {
            value: 79,
        },
        post_urls: [],
    },
    {
        profile_id: 3,
        platform: 'facebook',
        followers: {
            value: 2500,
            change: 0.3,
        },
        likes: {
            value: 910,
            change: 0.3,
        },
        posting: {
            value: 100,
            change: -0.3,
        },
        comments: {
            value: 900,
            change: -0.2,
        },
        rate: {
            value: 99,
        },
        post_urls: [],
    },
    {
        profile_id: 3,
        platform: 'instagram',
        followers: {
            value: 4500,
            change: -0.6,
        },
        likes: {
            value: 310,
            change: 0.2,
        },
        posting: {
            value: 200,
            change: -0.3,
        },
        comments: {
            value: 800,
            change: -0.2,
        },
        rate: {
            value: 89,
        },
        post_urls: [],
    },
    {
        profile_id: 4,
        platform: 'facebook',
        followers: {
            value: 2500,
            change: 0.3,
        },
        likes: {
            value: 910,
            change: 0.3,
        },
        posting: {
            value: 100,
            change: -0.3,
        },
        comments: {
            value: 900,
            change: -0.2,
        },
        rate: {
            value: 99,
        },
        post_urls: [],
    },
    {
        profile_id: 4,
        platform: 'instagram',
        followers: {
            value: 4500,
            change: -0.6,
        },
        likes: {
            value: 310,
            change: 0.2,
        },
        posting: {
            value: 200,
            change: -0.3,
        },
        comments: {
            value: 800,
            change: -0.2,
        },
        rate: {
            value: 89,
        },
        post_urls: [],
    },
    {
        profile_id: 5,
        platform: 'facebook',
        followers: {
            value: 2500,
            change: 0.3,
        },
        likes: {
            value: 910,
            change: 0.3,
        },
        posting: {
            value: 100,
            change: -0.3,
        },
        comments: {
            value: 900,
            change: -0.2,
        },
        rate: {
            value: 99,
        },
        post_urls: [],
    },
    {
        profile_id: 5,
        platform: 'instagram',
        followers: {
            value: 4500,
            change: -0.6,
        },
        likes: {
            value: 310,
            change: 0.2,
        },
        posting: {
            value: 200,
            change: -0.3,
        },
        comments: {
            value: 800,
            change: -0.2,
        },
        rate: {
            value: 89,
        },
        post_urls: [],
    },
    {
        profile_id: 6,
        platform: 'facebook',
        followers: {
            value: 2500,
            change: 0.3,
        },
        likes: {
            value: 910,
            change: 0.3,
        },
        posting: {
            value: 100,
            change: -0.3,
        },
        comments: {
            value: 900,
            change: -0.2,
        },
        rate: {
            value: 99,
        },
        post_urls: [],
    },
    {
        profile_id: 6,
        platform: 'instagram',
        followers: {
            value: 4500,
            change: -0.6,
        },
        likes: {
            value: 310,
            change: 0.2,
        },
        posting: {
            value: 200,
            change: -0.3,
        },
        comments: {
            value: 800,
            change: -0.2,
        },
        rate: {
            value: 89,
        },
        post_urls: [],
    },
    {
        profile_id: 8,
        platform: 'facebook',
        followers: {
            value: 2500,
            change: 0.3,
        },
        likes: {
            value: 910,
            change: 0.3,
        },
        posting: {
            value: 100,
            change: -0.3,
        },
        comments: {
            value: 900,
            change: -0.2,
        },
        rate: {
            value: 99,
        },
        post_urls: [],
    },
    {
        profile_id: 8,
        platform: 'instagram',
        followers: {
            value: 4500,
            change: -0.6,
        },
        likes: {
            value: 310,
            change: 0.2,
        },
        posting: {
            value: 200,
            change: -0.3,
        },
        comments: {
            value: 800,
            change: -0.2,
        },
        rate: {
            value: 89,
        },
        post_urls: [],
    },
    {
        profile_id: 7,
        platform: 'facebook',
        followers: {
            value: 3500,
            change: 0.3,
        },
        likes: {
            value: 610,
            change: 0.3,
        },
        posting: {
            value: 100,
            change: -0.3,
        },
        comments: {
            value: 900,
            change: -0.2,
        },
        rate: {
            value: 99,
        },
        post_urls: [],
    },
    {
        profile_id: 7,
        platform: 'instagram',
        followers: {
            value: 1500,
            change: -0.6,
        },
        likes: {
            value: 310,
            change: 0.2,
        },
        posting: {
            value: 200,
            change: -0.3,
        },
        comments: {
            value: 700,
            change: -0.2,
        },
        rate: {
            value: 89,
        },
        post_urls: [],
    },
];

// export const offersData: Offer[] = [
//     {
//         id: 1,
//         chatId: 1,
//         campId: 1,
//         accept_date: '11/02/2020',
//         status: 'pending',
//         ship_date: '11/02/2020',
//         ship_carrier: 'UPS',
//         arrv_date: '11/10/2020',
//         track_no: '235367363467',
//         profile_id: 2,
//         post_img: 'assets/img/demo/post-1.png',
//         caption: 'She is very kind and takes beautiful pictures. I want to work with her again!',
//         locationtags: ['chicago'],
//         tags: ['fashion'],
//         tags2: ['nike'],
//         editable: false,
//         adv_review: {
//             review_id: 1,
//             profile_id: 7,
//             reviewer: 'Hyebin Seong',
//             review_date: '09/02/2020',
//             review_title: '[Nike] Nike Air Max 1',
//             summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
//             rating: 4.7,
//             platform: 'facebook',
//             rating_values: [5, 4, 5, 5],
//         }
//     },
//     {
//         id: 2,
//         chatId: 1,
//         campId: 2,
//         accept_date: '11/02/2020',
//         status: 'active',
//         ship_date: '11/02/2020',
//         ship_carrier: 'FedEx',
//         arrv_date: '11/12/2020',
//         track_no: '235367363568',
//         profile_id: 2,
//         post_img: 'assets/img/demo/post-2.png',
//         caption: 'She is very kind and takes beautiful pictures. I want to work with her again!',
//         locationtags: ['chicago'],
//         tags: ['fashion'],
//         tags2: ['nike'],
//         editable: false,
//         adv_review: {
//             review_id: 1,
//             profile_id: 7,
//             reviewer: 'Hyebin Seong',
//             review_date: '09/02/2020',
//             review_title: '[Nike] Nike Air Max 1',
//             summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
//             rating: 4.7,
//             platform: 'facebook',
//             rating_values: [5, 4, 5, 5],
//         }
//     },
//     {
//         id: 3,
//         chatId: 1,
//         campId: 3,
//         accept_date: '11/02/2020',
//         status: 'active',
//         ship_date: '11/02/2020',
//         ship_carrier: 'USPS',
//         arrv_date: '11/02/2020',
//         track_no: '235367363567',
//         profile_id: 1,
//         post_img: 'assets/img/demo/post-1.png',
//         caption: 'She is very kind and takes beautiful pictures. I want to work with her again!',
//         locationtags: ['chicago'],
//         tags: ['fashion'],
//         tags2: ['nike'],
//         adv_review: {
//             review_id: 1,
//             profile_id: 7,
//             reviewer: 'Hyebin Seong',
//             review_date: '09/02/2020',
//             review_title: '[Nike] Nike Air Max 1',
//             summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
//             rating: 4.5,
//             platform: 'facebook',
//             rating_values: [5, 4, 4, 5],
//         }
//     },
//     {
//         id: 4,
//         chatId: 7,
//         campId: 3,
//         accept_date: '11/02/2020',
//         status: 'active',
//         ship_date: '11/02/2020',
//         ship_carrier: 'USPS',
//         arrv_date: '11/12/2020',
//         profile_id: 1,
//         track_no: '235367364567',
//         post_img: 'assets/img/demo/post-1.png',
//         caption: 'She is very kind and takes beautiful pictures. I want to work with her again!',
//         locationtags: ['chicago'],
//         tags: ['fashion'],
//         tags2: ['nike'],
//         adv_review: {
//             review_id: 1,
//             profile_id: 7,
//             reviewer: 'Hyebin Seong',
//             review_date: '09/02/2020',
//             review_title: '[Nike] Nike Air Max 1',
//             summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
//             rating: 4.5,
//             platform: 'facebook',
//             rating_values: [5, 4, 4, 5],
//         }
//     },
//     {
//         id: 5,
//         chatId: 7,
//         campId: 4,
//         accept_date: '11/02/2020',
//         status: 'active',
//         ship_date: '11/02/2020',
//         ship_carrier: 'USPS',
//         arrv_date: '11/12/2020',
//         profile_id: 1,
//         track_no: '235367364567',
//         post_img: 'assets/img/demo/post-1.png',
//         caption: 'She is very kind and takes beautiful pictures. I want to work with her again!',
//         locationtags: ['chicago'],
//         tags: ['fashion'],
//         tags2: ['nike'],
//         adv_review: {
//             review_id: 1,
//             profile_id: 7,
//             reviewer: 'Hyebin Seong',
//             review_date: '09/02/2020',
//             review_title: '[Nike] Nike Air Max 1',
//             summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
//             rating: 4.5,
//             platform: 'facebook',
//             rating_values: [5, 4, 4, 5],
//         }
//     },
//     {
//         id: 6,
//         chatId: 7,
//         campId: 5,
//         accept_date: '11/02/2020',
//         status: 'pending',
//         ship_date: '11/02/2020',
//         ship_carrier: 'USPS',
//         arrv_date: '11/12/2020',
//         profile_id: 1,
//         track_no: '235367364567',
//         post_img: 'assets/img/demo/post-1.png',
//         caption: 'She is very kind and takes beautiful pictures. I want to work with her again!',
//         locationtags: ['chicago'],
//         tags: ['fashion'],
//         tags2: ['nike'],
//         adv_review: {
//             review_id: 1,
//             profile_id: 7,
//             reviewer: 'Hyebin Seong',
//             review_date: '09/02/2020',
//             review_title: '[Nike] Nike Air Max 1',
//             summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
//             rating: 4.5,
//             platform: 'facebook',
//             rating_values: [5, 4, 4, 5],
//         }
//     },
//     {
//         id: 7,
//         chatId: 7,
//         campId: 6,
//         accept_date: '11/02/2020',
//         status: 'completed',
//         ship_date: '11/02/2020',
//         ship_carrier: 'USPS',
//         arrv_date: '11/12/2020',
//         profile_id: 1,
//         track_no: '235367364567',
//         post_img: 'assets/img/demo/post-1.png',
//         caption: 'She is very kind and takes beautiful pictures. I want to work with her again!',
//         locationtags: ['chicago'],
//         tags: ['fashion'],
//         tags2: ['nike'],
//         adv_review: {
//             review_id: 1,
//             profile_id: 7,
//             reviewer: 'Hyebin Seong',
//             review_date: '09/02/2020',
//             review_title: '[Nike] Nike Air Max 1',
//             summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
//             rating: 4.7,
//             platform: 'facebook',
//             rating_values: [5, 4, 5, 5],
//         }
//     },
//     {
//         id: 8,
//         chatId: 1,
//         campId: 5,
//         accept_date: '11/02/2020',
//         status: 'completed',
//         ship_date: '11/02/2020',
//         ship_carrier: 'USPS',
//         arrv_date: '11/12/2020',
//         profile_id: 1,
//         track_no: '235367364567',
//         post_img: 'assets/img/demo/post-1.png',
//         caption: 'She is very kind and takes beautiful pictures. I want to work with her again!',
//         locationtags: ['chicago'],
//         tags: ['fashion'],
//         tags2: ['nike'],
//         adv_review: {
//             review_id: 1,
//             profile_id: 7,
//             reviewer: 'Hyebin Seong',
//             review_date: '09/02/2020',
//             review_title: '[Nike] Nike Air Max 1',
//             summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
//             rating: 4.7,
//             platform: 'facebook',
//             rating_values: [5, 4, 5, 5],
//         }
//     },
//     {
//         id: 9,
//         chatId: 1,
//         campId: 6,
//         accept_date: '11/02/2020',
//         status: 'pending',
//         ship_date: '11/02/2020',
//         ship_carrier: 'USPS',
//         arrv_date: '11/12/2020',
//         profile_id: 1,
//         track_no: '235367364567',
//         post_img: 'assets/img/demo/post-1.png',
//         caption: 'She is very kind and takes beautiful pictures. I want to work with her again!',
//         locationtags: ['chicago'],
//         tags: ['fashion'],
//         tags2: ['nike'],
//         adv_review: {
//             review_id: 1,
//             profile_id: 7,
//             reviewer: 'Hyebin Seong',
//             review_date: '09/02/2020',
//             review_title: '[Nike] Nike Air Max 1',
//             summary: 'She is very kind and takes beautiful pictures. I want to work with her again! She is very kind and takes beautiful pictures. I want to work with her again!',
//             rating: 4.5,
//             platform: 'facebook',
//             rating_values: [5, 4, 4, 5],
//         }
//     },
// ]
export const proposalsData: Proposal[] = [
    {
        id: 1,
        campId: 2,
        userId: 3,
        description: 'I love taking pictures and enjoy experiencing a new journey in my life. I’ll be happy if I work with you!',
        status: 'pending',
    },
    {
        id: 2,
        campId: 4,
        userId: 2,
        description: 'I love taking pictures and enjoy experiencing a new journey in my life. I’ll be happy if I work with you!',
        status: 'pending',
    }
];