import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%">
      <Box className="flex justify-between">
        <Box>
          {icon}
          <Typography className="text-xl font-semibold text-gray-700 my-1">
            {title}
          </Typography>
        </Box>
      </Box>
      <Box className="flex justify-between">
        <Typography className="text-primary text-sm">
          {subtitle}
        </Typography>
        <Typography fontStyle="italic" className="text-primary text-sm">
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
