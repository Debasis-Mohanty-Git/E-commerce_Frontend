'use client'
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import Rating from '@mui/material/Rating'
import Grid from '@mui/material/Grid'
import ProductReviewCard from './ProductReviewCard'
import { Box, LinearProgress } from '@mui/material'
import HomeCard from '../HomeSectionCard/HomeCard'
import { mens_kurta } from '../../../Data/mens_kurta';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductsById } from '../../../State/Product/Action'
import { addItemToCart } from '../../../State/Cart/Action'

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
        { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
        { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
    ],
    sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
    const [selectedSize, setSelectedSize] = useState(null)
    const params=useParams();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const{products}=useSelector(store => store)

    const handleAddToCart =()=>{
        const data={
            productId:params.productId,
            size:selectedSize.name,
            quatity : 1,
        }
        console.log("data ",data);
        dispatch(addItemToCart(data));
       navigate("/cart")
    }

    useEffect(()=>{
        const date={productId:params.productId}
        dispatch(findProductsById(params.productId))
    },[params.productId])

    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-6 rounded-lg shadow-md">

                    {/* 📸 Image Gallery */}
                    <div className="flex flex-col items-center gap-4">
                        <img
                            alt={product.images[0].alt}
                            src={products?.product?.imageUrl}
                            className="w-[20rem] h-[25rem] object-center object-cover rounded-lg shadow-sm"
                        />

                        {/* Thumbnails */}
                        <div className="flex gap-2 overflow-x-auto max-w-md">
                            {product.images.map((item) => (
                                <img
                                    alt={item.alt}
                                    src={item.src}
                                    className="h-16 w-16 object-cover rounded border hover:translate-x-2 cursor-pointer transition-transform duration-200"
                                />
                            ))}
                        </div>
                    </div>

                    {/* 🛍️ Product Info */}
                    <div className="flex flex-col justify-between">
                        {/* Title & Price */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 ">{products.product?.brand}</h2>
                            <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                                <p className='font-semibold'>₹{products.product?.discountedPrice}</p>
                                <p className='opacity-50 line-through'>{products.product?.price}</p>
                                <p className='text-green-600'>{products.product?.discountPresent}% off</p>
                            </div>

                            {/*Rating */}
                            <div className="flex items-center mt-3">
                                <Rating name="read-only" value={reviews.average} readOnly />
                                <span className="ml-2 text-sm text-gray-600 ">({reviews.totalCount} reviews)</span>
                            </div>
                        </div>

                        {/* 🎨 Colors
                        <div className="mt-6">
                            <h3 className="text-sm font-medium text-gray-900 mb-2">{products.product?.color}</h3>
                            <div className="flex gap-3">
                                {product.colors.map((color) => (
                                    <div key={color.id}>
                                        <input
                                            type="radio"
                                            name="color"
                                            aria-label={color.name}
                                            className={`h-8 w-8 rounded-full border border-gray-300 cursor-pointer appearance-none ${color.classes}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div> */}


                        {/* Sizes */}
                        <div className="mt-6">
                            <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
                            <div className="grid grid-cols-4 gap-2">
                                {product.sizes.map((size) => (
                            <button
                                key={size.name}
                                disabled={!size.inStock}
                                onClick={() => setSelectedSize(size)} 
                                className={classNames(
                                    size.inStock
                                        ? 'bg-white text-gray-900 border hover:bg-indigo-50'
                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed',
                                    selectedSize?.name === size.name ? 'ring-2 ring-indigo-600' : '', // Optional: highlight selected
                                    'py-2 px-4 rounded text-sm border font-medium'
                                )}
                            >
                                {size.name}
                            </button>
                        ))}
                            </div>
                        </div>

                        

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            type="button"
                            className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
                        >
                            Add to Cart
                        </button>

                        {/*Description, Highlights, Details */}
                        <div className="mt-10 space-y-6">
                            {/* Description */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Description</h3>
                                <p className="text-sm text-gray-700 mt-2 opacity-50">{product.description}</p>
                            </div>

                            {/* Highlights */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Highlights</h3>
                                <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1 mt-2 opacity-50">
                                    {product.highlights.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Details */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Details</h3>
                                <p className="text-sm text-gray-600 mt-2 opacity-50">{product.details}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Review and Rating */}
                <section className="px-4 py-12 bg-gray-50 flex justify-center">
                    <div className="max-w-6xl w-full">
                        <h1 className="text-2xl font-bold text-center text-gray-800 mb-10">
                            Customer Reviews & Ratings
                        </h1>

                        <Grid container spacing={6}>
                            {/* Ratings Column */}
                            <Grid item xs={12} md={5}>
                                <div className="bg-white rounded-xl shadow p-6 space-y-5 ml-7">
                                    <h2 className="text-lg font-semibold text-gray-800">Overall Rating</h2>
                                    <div className="flex items-center gap-3">
                                        <Rating value={4.6} readOnly precision={0.5} />
                                        <span className="text-sm text-gray-500">1,240 total</span>
                                    </div>

                                    {[
                                        { label: 'Excellent', value: 75, color: '#16a34a' },
                                        { label: 'Very Good', value: 60, color: '#22c55e' },
                                        { label: 'Good', value: 40, color: '#eab308' },
                                        { label: 'Average', value: 20, color: '#f97316' },
                                        { label: 'Poor', value: 5, color: '#dc2626' }
                                    ].map(({ label, value, color }) => (
                                        <div key={label}>
                                            <div className="flex justify-between text-sm text-gray-700 font-medium mb-1">
                                                <span>{label}</span>
                                                <span>{value}%</span>
                                            </div>
                                            <LinearProgress
                                                variant="determinate"
                                                value={value}
                                                sx={{
                                                    height: 8,
                                                    borderRadius: 4,
                                                    backgroundColor: '#f3f4f6',
                                                    [`& .MuiLinearProgress-bar`]: { backgroundColor: color }
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Grid>

                            {/* Reviews Column */}
                            <Grid item xs={12} md={7}>
                                <div className="space-y-5">
                                    {[1, 2, 3].map((_, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition"
                                        >
                                            <div className="flex justify-between items-center mb-1">
                                                <h3 className="font-semibold text-gray-800">Alex Johnson</h3>
                                                <span className="text-xs text-gray-400">June 20, 2025</span>
                                            </div>
                                            <div className="mb-2">
                                                <Rating value={4.0} readOnly size="small" />
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Outstanding quality and quick delivery. This product deserves the hype!
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </section>

                {/* Similar Product */}
                <section className='p-14'>
                    <h1 className='py-5 font-bold text-xl'>Similar Products</h1>

                    <div className="flex flex-wrap space-y-5">
                        {mens_kurta.map((item) => <HomeCard product={item} />)}
                    </div>
                </section>
            </div>
        </div>
    )
}
