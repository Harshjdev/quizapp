import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from 'react-router-dom';

function Home() {
  const categories = [
    {name:'Technology',id:1,icon:'https://cdn-icons-png.flaticon.com/512/4257/4257483.png'},
    {name:'Nature',id:2,icon:'https://cdn-icons-png.flaticon.com/512/2823/2823511.png'},
    {name:'Politics',id:3,icon:'https://static.thenounproject.com/png/955295-200.png'},
    {name:'Sports',id:4,icon:'https://cdn-icons-png.flaticon.com/512/857/857492.png'},
  ];

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Select Category to Play</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-[400px] grid-cols-2 gap-4">
            {categories.map((category, index) => (
             <Link to='/quiz' key={index} className="flex border bg-white opacity-70 text-black py-5 px-5 ">
                <img src={category.icon} alt={category.name} width="50" height="50" /> {/* Display the icon */}
                <span className='p-4'>{category.name}</span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
