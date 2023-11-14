import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
 
// Axios
import axios from 'axios';

async function fetchDataWithAxios() {
  try {
    const response = await axios.get('http://localhost:8000/api/endpoint');
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.error('Error fetching data with Axios:', error);
  }
}

export default async function Page() {
  return (
    <main>
      
      {/* Home dash */}
      
    </main>
  );
}