import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Legend, Line } from "recharts";
import { Link, useNavigate } from 'react-router-dom'
import aImage from '../../components/charts/a.png';
import bImage from '../../components/charts/b.png';
import Donutchart from "../../components/charts/donutchart";
import Sidebar from "../../components/layput/Sidebar";
import Navbar from "../../components/layput/Navbar";
import axios from 'axios';
import UserCard from './userCard';
import ProductCard from './productCard';
import TodayData from './todayData';
import LineAnalytics from '../../components/charts/LineAnalytics';
import CheckoutModal from '../public/CheckoutModal';


// Dashboard.jsx ke andar ye paths hone chahiye:


const Dashboard = () => {
  const [usersArray, setUsersArray] = useState([]);
  const [users, setusers] = useState(0)
  const [productsArray, setproductsArray] = useState([])
  const [products, setproducts] = useState(0)
  const [todayusers, settodayusers] = useState(0)
  const [todayproducts, settodayproducts] = useState(0)
 


const productData = [
  { day: "Mon", count: 5 },
  { day: "Tue", count: 8 },
  { day: "Wed", count: 12 },
  { day: "Mon", count: 5 },
  { day: "Tue", count: 8 },
  { day: "Wed", count: 12 },
  { day: "Mon", count: 5 },
  { day: "Tue", count: 8 },
  { day: "Wed", count: 12 },
 
];

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8000/admin");
  //       setusers(res.data.length);
  //       const today = new Date().toDateString()
  //       const todayuser = res.data.filter((user) => {
  //          if (!user.date) return false; // 👈 ignore missing date
  //         return new Date(user.date).toDateString() == today
  //       })
  //       settodayusers(todayuser.length)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchUsers();
  // }, []); // 👈 run only once
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/admin");

        // total users
        setUsersArray(res.data);
        setusers(res.data.length);

        const today = new Date().toDateString();

        // sirf valid date wale users + today match
        const todayUsers = res.data.filter((user) => {
          if (!user.date) return false; // 👈 ignore missing date

          return new Date(user.date).toDateString() === today;
        });

        settodayusers(todayUsers.length);

      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();

    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/admin/product");
        setproducts(res.data.length);
        setproductsArray(res.data);
        const today = new Date().toDateString();

        // sirf valid date wale users + today match
        const todayProducts = res.data.filter((product) => {
          if (!product.date) return false; // 👈 ignore missing date

          return new Date(product.date).toDateString() === today;
        });

        settodayproducts(todayProducts.length);

      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className="h-[89%] w-full flex flex-col gap-3 bg-zinc-800 text-white p-5">

      {/* GLOW BACKGROUND */}
      <div className="absolute w-full inset-0 overflow-hidden pointer-events-none">

        {/* 🌟 TOP LEFT GLOW */}
        <div className="absolute w-[260px] h-[260px] bg-rose-500/20 blur-[100px] rounded-full top-[-120px] left-[-120px]" />

        {/* 🌟 BOTTOM RIGHT GLOW */}
        <div className="absolute w-[480px] h-[280px] bg-pink-500/30 blur-[110px] rounded-full bottom-[-130px] right-[-130px]" />

      </div>

      <div className='text-gray-200 text-3xl'>
        Dashboard
      </div>

      {/* Top cards */}
      <div className='flex  flex-wrap gap-4'>

        {/* <UserCard users={users} setusers={setusers} />
        <ProductCard /> */}
        <TodayData heading={'Users'} total={users} today={todayusers} />
        <TodayData heading={'Products'} total={products} today={todayproducts} />
        <TodayData heading={'Users'} total={users} today={todayusers} />
        <TodayData heading={'Products'} total={products} today={todayproducts} />

        

      </div>

      {/* Images */}
      <div className='flex flex-col  md:flex-row gap-4 w-full'>

        <div className='bg-zinc-700/20 flex-1 flex justify-center items-center  border border-zinc-600'>
          {/* <img className='max-h-[210px]  object-contain' src={aImage} /> */}
          <LineAnalytics heading={'User'} data={usersArray}/>
        </div>
        <div className='bg-zinc-700/20 flex-1 flex justify-center items-center  border border-zinc-600'>
          {/* <img className='max-h-[210px]  object-contain' src={aImage} /> */}
          <LineAnalytics heading={'Products'} data={productsArray}/>
        </div>


      </div>

    </div>
  )
}
export default Dashboard