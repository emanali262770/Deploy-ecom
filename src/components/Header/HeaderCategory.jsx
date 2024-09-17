'use client'
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';
import HeaderSlider from './HeaderSlider';
// Define the items for the sidebar menu
const items = [
    {
        label: <Link href="/fresh-fruit">Fresh Fruit</Link>,
        key: 'fresh-fruit',
        icon: <MailOutlined />,
    },
    {
        label: <Link href="/vegetables">Vegetables</Link>,
        key: 'vegetables',
        icon: <AppstoreOutlined />,
    },
    {
        label: <Link href="/river-fish">River Fish</Link>,
        key: 'river-fish',
        icon: <SettingOutlined />,
    },
    {
        label: <Link href="/chicken-meat">Chicken & Meat</Link>,
        key: 'chicken-meat',
        icon: <MailOutlined />,
    },
    {
        label: <Link href="/drink-water">Drink & Water</Link>,
        key: 'drink-water',
        icon: <AppstoreOutlined />,
    },
    {
        label: <Link href="/yogurt-ice-cream">Yogurt & Ice Cream</Link>,
        key: 'yogurt-ice-cream',
        icon: <SettingOutlined />,
    },
    {
        label: <a href="/cake-bread">Cake & Bread</a>,
        key: 'cake-bread',
        icon: <MailOutlined />,
    },
    {
        label: <Link href="/butter-cream">Butter & Cream</Link>,
        key: 'butter-cream',
        icon: <AppstoreOutlined />,
    },
    {
        label: <Link href="/cooking">Cooking</Link>,
        key: 'cooking',
        icon: <SettingOutlined />,
    },
    {
        key: 'all-categories',
        label: (
            <a href="/all-categories" className="text-blue-500 text-lg" rel="noopener noreferrer">
               + View all Category
            </a>
        ),
    },
];

// HeaderCategory component definition
const HeaderCategory = () => {
    const [current, setCurrent] = useState('fresh-fruit');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div className="flex max-w-[1260px] gap-5 mx-auto">
            <div className='w-[16rem]   bg-gray-100  p-2'>
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="vertical"
                    items={items}
                    className="custom-sidebar-menu  bg-gray-100"
                />
            </div>
            <HeaderSlider/>
        </div>
    );
};

export default HeaderCategory;
