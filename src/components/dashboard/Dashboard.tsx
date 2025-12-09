import type { DashboardData } from '../../interfaces/DashboardData'
import './Dashboard.css'

const Dashboard = () => {
    const dashboardData: DashboardData = {
        nome: 'João Silva',
        email: 'example@mail.com',
    }

    return (
        <div>
            <div className='container-dashboard'>
                <h2>{dashboardData.nome}</h2>
                <p><b>Email:</b> {dashboardData.email}</p>
            </div>
        </div>
    )
}

export default Dashboard