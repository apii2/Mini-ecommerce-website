'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  const formList = [
    {
      name: 'full_name',
      type: 'text',
      placeholder: 'Your Name',
      label: 'Full Name'
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'you@example.com',
      label: 'Email'
    },
    {
      name: 'address',
      type: 'text',
      placeholder: 'City, District, Province',
      label: 'Shipping Address'
    }
  ];

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto px-4 py-6 space-y-4 border rounded-lg shadow-sm bg-white">
      <h2 className="text-2xl font-bold mb-2">Checkout</h2>

      {formList.map(dat=>(
        <div key={dat.name}>
          <Label htmlFor={dat.name} className="block text-sm font-medium mb-1">{dat.label}</Label>
          <Input
            id={dat.name}
            name={dat.name}
            value={formData[dat.name]}
            onChange={handleChange}
            required
            placeholder={dat.placeholder}
          />
        </div>
      ))}

      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
        <Link href='/success'>
          Place Order
        </Link>
      </Button>
    </form>
  );
}
