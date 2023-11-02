import React from 'react'
import { PageAnimation } from '../../shared/components/animations/Animation'
import { PageWrapper } from '../../shared/components/wrapper/DefaultWrapper'
import Overview from './components/overview/Overview'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {  SelectFieldYear } from '../../shared/components/input-fields/SelectField';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const DashboardPage = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Products',
                data: [1000, 5000, 500, 40, 800, 0, 800, 0, 0, 0, 0, 0],
                borderColor: '#40D7E1',
                backgroundColor: '#40D7E1',
            },

        ],
    };
    return (
        <PageAnimation>
            <PageWrapper title={'Dashboard Overview'}>
                <Overview />
                <div className="w-full bg-white my-4 p-4">
                    <div className="chart-header flex items-center justify-between">
                        <h2 className='text-2xl font-Literata'>Monthly sales</h2>
                        <SelectFieldYear />
                    </div>
                    <Line data={data} />

                </div>

            </PageWrapper>
        </PageAnimation>
    )
}

export default DashboardPage