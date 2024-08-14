
export default function formatNumber (num){ // helper function to format number in USA format
        return new Intl.NumberFormat('en-US').format(num);
    };
