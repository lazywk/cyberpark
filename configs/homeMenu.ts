import { HomeMenuType } from "@/types/home";


export const homeMenu: HomeMenuType[] = [
    {
        title: 'Users',
        path: '/users',
        features: ['Get all list', 'Create']
    },
    {
        title: 'Products',
        path: '/products',
        features: ['Get all list', 'Create', 'Update']
    },
    {
        title: 'Posts',
        path: '/posts',
        features: ['Get all list']
    },
    {
        title: 'Todos',
        path: '/todos',
        features: ['Get all list', 'Delete', 'Create']
    }
]