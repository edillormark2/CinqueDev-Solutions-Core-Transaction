import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockTransactions } from "../data/chartsData/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../components/charts/LineChart";
import GeographyChart from "../components/charts/GeographyChart";
import BarChart from "../components/charts/BarChart";
import ProgressCircle from "../components/charts/ProgressCircle";
import StatBox from "../components/charts/StatBox";
import { BiSupport } from "react-icons/bi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { RxUpdate } from "react-icons/rx";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className=" mx-4 md:mx-12 my-20 md:my-0">
      <div className="font-semibold text-2xl mb-4 mt-2">DASHBOARD</div>

      {/* ROW 1 STATS */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex w-full lg:w-1/2 min-w-28 gap-2 md:gap-4">
          <div className="bg-white flex justify-center w-full items-center p-8 rounded-xl">
            <StatBox
              title="145"
              subtitle="Consultations"
              progress="0.75"
              increase=""
              icon={<BiSupport size={24} className="text-primary" />}
            />
          </div>
          <div className="bg-white flex justify-center w-full items-center p-8 rounded-xl">
            <StatBox
              title="43"
              subtitle="Inquiries"
              progress="0.75"
              increase="+14%"
              icon={
                <IoChatbubbleEllipsesOutline
                  size={24}
                  className="text-primary"
                />
              }
            />
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 min-w-28 gap-2 md:gap-4">
          <div className="bg-white flex justify-center w-full items-center p-8 rounded-xl">
            <StatBox
              title="12"
              subtitle="Active Projects"
              progress="0.50"
              increase="+21%"
              icon={<GoProject size={24} className="text-primary" />}
            />
          </div>
          <div className="bg-white flex justify-center w-full items-center p-8 rounded-xl">
            <StatBox
              title="18"
              subtitle="Ongoing Support"
              progress="0.30"
              increase="+5%"
              icon={<RxUpdate size={24} className="text-primary" />}
            />
          </div>
        </div>
      </div>

      {/* ROW 2 CHARTS */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* LINE CHARTS */}
        <div className="bg-white p-2 rounded-xl my-4 w-full min-w-64 h-full">
          <div className="flex justify-between p-2">
            <div>
              <Typography className="text-base font-semibold text-gray-700">
                Revenue Generated
              </Typography>
              <Typography className="font-bold text-xl text-primary">
                ₱ 559,342.32
              </Typography>
            </div>
            <div>
              <IconButton>
                <DownloadOutlinedIcon size={22} className="text-primary" />
              </IconButton>
            </div>
          </div>
          <Box height="275px" m="-30px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </div>

        {/* RECENT TRANSACTION */}
        <div className="w-full lg:w-3/6 py-4 px-2 bg-white mt-4 rounded-xl h-full ">
          <div>
            <Typography className="text-base font-semibold text-gray-700 my-2 mx-2">
              Recent Transactions
            </Typography>
          </div>
          <div className="overflow-auto h-60 lg:h-64">
            {mockTransactions.map((transaction, i) =>
              <Box
                key={`${transaction.txId}-${i}`}
                className="flex justify-between border-b-2 border-gray-300 p-4 items-center "
              >
                <Box>
                  <Typography className="text-primary font-semibold">
                    {transaction.txId}
                  </Typography>
                  <Typography className="text-gray-600 text-xs">
                    {transaction.user}
                  </Typography>
                </Box>
                <Box className="text-sm">
                  {transaction.date}
                </Box>
                <Box className="bg-primary text-white px-2 py-1 rounded-md text-xs">
                  ₱ {transaction.cost}
                </Box>
              </Box>
            )}
          </div>
        </div>
      </div>

      {/* ROW 3 CHARTS */}
      <div className="flex flex-col lg:flex-row gap-4 ">
        <div className="bg-white p-4 rounded-xl h-72 flex-1 min-w-[200px]">
          <Typography className="text-base font-semibold text-gray-700 my-2">
            Campaign
          </Typography>
          <div className="flex flex-col items-center">
            <ProgressCircle size="125" />
            <Typography className="text-primary text-base mt-4">
              ₱48,352 revenue generated
            </Typography>
            <Typography className="text-xs text-center">
              Includes extra misc expenditures and costs
            </Typography>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl h-72 flex-1 min-w-[200px]">
          <Typography className="text-base font-semibold text-gray-700 my-2">
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </div>
        <div className="bg-white p-4 rounded-xl h-72 flex-1 min-w-[200px]">
          <Typography className="text-base font-semibold text-gray-700 my-2">
            Geography Based Clients
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
