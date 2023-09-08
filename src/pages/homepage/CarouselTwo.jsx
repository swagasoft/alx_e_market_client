import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const images = [


  {
    label: 'Treasure Hunt',
    imgPath:
      'https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Gadget-upgrade/Grocery-big-savings/Desktop_Homepage_Slider__712x384.jpg',
  },
    {
      label: 'Phone deals',
      imgPath:
        'https://ng.jumia.is/cms/0-5-brand-festival/2023/Consumer-deals/SX__712x384_phone_dealas.png',
    },
    {
      label: 'Best Deal',
      imgPath:
        'https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Slider_.jpg',
    },
    {
      label: 'Up coming',
      imgPath:
        'https://ng.jumia.is/cms/0-5-brand-festival/2023/BF-Slider.jpg',
    },
   
    {
      label: 'Best Deal',
      imgPath:
        'https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1693637139/contentservice/Groceries.jpg_r1OM58x0n.jpg',
    },
    {
      label: 'Deal of the day',
      imgPath:
        'https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1692809087/contentservice/NiveaWeb.jpg_HJDYvnQp2.jpg',
    },
    {
      label: 'Grab it Now',
      imgPath:
        'https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1693396201/contentservice/DavidoooWeb.jpg_rJ0JTsnT2.jpg',
    },
  ];


const CarouselTwo = () => {
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
    };
  


    return (
         <>
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
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
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    
        </> 
     );
}
 
export default CarouselTwo;