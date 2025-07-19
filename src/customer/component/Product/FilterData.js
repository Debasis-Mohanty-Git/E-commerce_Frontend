export const color = [
    "White",
    "Black",
    "Red",
    "Marun",
    "Beige",
    "Pink",
    "Green",
    "Yellow",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        type: "radio",
        options: [
            { value: "white", label: "White" },
            { value: "black", label: "Black" },
            { value: "red", label: "Red" },
            { value: "marun", label: "Marun" },
            { value: "beige", label: "Beige" },
            { value: "pink", label: "Pink" },
            { value: "green", label: "Green" },
            { value: "yellow", label: "Yellow" },
        ],
    },
    {
        id: "size",
        name: "Size",
        type: "radio",
        options: [
            { value: "s", label: "S" },
            { value: "m", label: "M" },
            { value: "l", label: "L" },
        ],
    },
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "₹159 To 399" },
            { value: "399-999", label: "₹399 To 999" },
            { value: "999-1999", label: "₹999 To 1999" },
            { value: "1999-2999", label: "₹1999 To 2999" },
            { value: "3999-above", label: "₹3999 and above" },
        ],
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10", label: "10% And more" },
            { value: "20", label: "20% And more" },
            { value: "30", label: "30% And more" },
            { value: "50", label: "50% And more" },
            { value: "70", label: "70% oAndr more" },
        ],
    },
    {
        id: "availability",
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out of Stock" },
        ],
    },
];

