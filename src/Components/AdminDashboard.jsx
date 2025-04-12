import React, { useEffect , useRef} from "react";
import Chart from "chart.js/auto";

export default function AdminDashboard() {
    const userChartRef = useRef(null);
    const activityChartRef = useRef(null);
    const userChartInstance = useRef(null);
    const activityChartInstance = useRef(null);
  
    useEffect(() => {
      const userCtx = document.getElementById("userChart")?.getContext("2d");
      const activityCtx = document.getElementById("activityChart")?.getContext("2d");
  
      // ✅ Destroy previous instances if they exist
      if (userChartInstance.current) userChartInstance.current.destroy();
      if (activityChartInstance.current) activityChartInstance.current.destroy();
  
      // ✅ Create new chart instances
      userChartInstance.current = new Chart(userCtx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "New Users",
              data: [120, 190, 170, 220, 250, 300],
              borderColor: "#3b82f6",
              tension: 0.1,
              fill: true,
            },
          ],
        },
      });
  
      activityChartInstance.current = new Chart(activityCtx, {
        type: "bar",
        data: {
          labels: ["Posts", "Comments", "AI Chats", "Therapy Sessions"],
          datasets: [
            {
              label: "Activity",
              data: [543, 1200, 2876, 187],
              backgroundColor: ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"],
            },
          ],
        },
      });
  
      // ✅ Cleanup on unmount
      return () => {
        userChartInstance.current?.destroy();
        activityChartInstance.current?.destroy();
      };
    }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen font-[Poppins]">
      {/* Sidebar */}
      <div className="sidebar bg-gray-800 text-white w-64 fixed h-full">
        <div className="p-4 flex items-center">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <span className="ml-2 text-xl font-semibold">Mindhail Admin</span>
        </div>
        <nav className="mt-6">
          <a href="#" className="block py-2 px-4 bg-gray-700 text-white">
            <i className="fas fa-tachometer-alt mr-2"></i>Dashboard
          </a>
          <a href="#" className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">
            <i className="fas fa-users mr-2"></i>Users
          </a>
          <a href="#" className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">
            <i className="fas fa-comments mr-2"></i>Posts
          </a>
          <a href="#" className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">
            <i className="fas fa-robot mr-2"></i>AI Chat
          </a>
          <a href="#" className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">
            <i className="fas fa-cog mr-2"></i>Settings
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Users", count: "1,248", icon: "fa-users", color: "blue" },
            { label: "Community Posts", count: "543", icon: "fa-comments", color: "green" },
            { label: "AI Conversations", count: "2,876", icon: "fa-robot", color: "purple" },
            { label: "Appointments", count: "187", icon: "fa-calendar-check", color: "yellow" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className={`p-3 rounded-full bg-${stat.color}-100 text-${stat.color}-500`}>
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <div className="ml-4">
                  <p className="text-gray-500">{stat.label}</p>
                  <h3 className="text-2xl font-bold">{stat.count}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">User Growth</h3>
            <div className="chart-container h-[300px]">
              <canvas id="userChart"></canvas>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Activity</h3>
            <div className="chart-container h-[300px]">
              <canvas id="activityChart"></canvas>
            </div>
          </div>
        </div>

        {/* Recent Users Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Recent Users</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {["Name", "Email", "Joined", "Status", "Actions"].map((col, i) => (
                    <th
                      key={i}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                  <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-10-15</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};


