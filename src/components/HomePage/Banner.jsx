import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://cf.shopee.vn/file/3df2ccb952a293d262e1caf3b7909731_xxhdpi",
  },
  {
    imgPath:
      "https://cf.shopee.vn/file/3df2ccb952a293d262e1caf3b7909731_xxhdpi",
  },
  {
    imgPath:
      "https://cf.shopee.vn/file/3df2ccb952a293d262e1caf3b7909731_xxhdpi",
  },

  {
    imgPath:
      "https://cf.shopee.vn/file/3df2ccb952a293d262e1caf3b7909731_xxhdpi",
  },
  {
    imgPath:
      "https://cf.shopee.vn/file/3df2ccb952a293d262e1caf3b7909731_xxhdpi",
  },
  {
    imgPath:
      "https://cf.shopee.vn/file/3df2ccb952a293d262e1caf3b7909731_xxhdpi",
  },
];
function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
    console.log(step);
  };
  return (
    <>
      <div className="mt-[7.4375rem] mb-[1.25rem]">
        <div className=" mt-[30px] mr-auto ml-auto w-[1200px] flex ">
          <div className="flex min-h-[235px] max-h-[235px] leading-[0] ">
            <div className="rounded-[0.125rem] rounded-l-[2px] truncate grow-[2] shrink-[1] basis-0 flex ">
              <div className="w-[100%] h-[100%]">
                <Box sx={{}}>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                  >
                    {images.map((step, index) => (
                      <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                          <Box
                            component="img"
                            sx={{
                              display: "block",
                              height: "100%",
                              overflow: "hidden",
                              width: "100%",
                            }}
                            src={step.imgPath}
                          />
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                </Box>
              </div>
              <div className="bg-cover  ">
                <img
                  src="https://cf.shopee.vn/file/6c04072b53b30da61cb8955e215b5394_xhdpi"
                  alt="hinhanh"
                  className="pl-[4px] pb-[4px]"
                />
                <img
                  src="https://cf.shopee.vn/file/6c04072b53b30da61cb8955e215b5394_xhdpi"
                  alt="hinhanh"
                  className="pl-[4px] pb-[4px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
