const singleFilter = [
    {
        id:"price",
        name:"price",
        options:[
            {value:"159-399",label:"₹159 To ₹399"},
            {value:"399-999",label:"₹399 To ₹999"},
            {value:"999-1999",label:"₹999 To ₹1999"},
            {value:"1999-2999",label:"₹1999 To ₹2999"},
            {value:"3999-4999",label:"₹3999 To ₹4999"},
        ]
    },
    {
        id:"discount",
        name:"Discount Range",
        options:[
            {value:"10",label:"10% AND ABOVE"},
            {value:"20",label:"20% AND ABOVE"},
            {value:"30",label:"30% AND ABOVE"},
            {value:"40",label:"40% AND ABOVE"},
            {value:"50",label:"50% AND ABOVE"},
            {value:"60",label:"60% AND ABOVE"},
            {value:"70",label:"70% AND ABOVE"},
            {value:"80",label:"80% AND ABOVE"},
        ]
    },
    {
        id:"stock",
        name:"Availability",
        options:[
            {value:"in_stock",label:"In stoke"},
            {value:"out_of_stock",label:"Out of stoke"},

        ]
    }
]
export  {singleFilter}