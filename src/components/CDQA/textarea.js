import React from 'react';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
 
 const validate = values => {
   const errors = {};
   if (!values.question) {
     errors.question = 'Required';
   } else if (values.question.length > 40) {
     errors.question = 'Must be 15 characters or less';
   }
 
   return errors;
 };


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    container: {
        padding: '30px',
    },
    dropzone: {
        margin: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: '2px dashed #1c233e', 
        height: '100%',
        padding: '16px 11px',
        borderRadius: '5px',
        background: 'linear-gradient(90deg, rgba(36,44,78,1) 0%, rgba(49,61,100,1) 29%, rgba(63,78,128,1) 51%, rgba(47,58,98,1) 75%, rgba(36,44,78,1) 100%)',
    },
    dropzoneContainer: {
        textAlign: 'center',
    },
    browseButton: {
        textTransform: 'none',
        backgroundColor: '#1273eb', 
        color: '#fff',
        padding: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
        "&:hover": {
            backgroundColor: '#0a045e'
        }
    },
    drag: {
        color: '#000',
        fontSize: '20px',
        fontWeight: '500',
    },
    or: {
        color: '#0a045e',
        fontSize: '15px',
        fontWeight: '400',
    }
}));

const Paragraph_demo = () => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            context: '',
            question: '',
            para_min_length: '',
            para_search_limit: '',
        },
        validate,
        onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={classes.container}>
            <Paper square>
                <Grid container>
                    <form onSubmit={formik.handleSubmit}>
                    <Grid style={{ backgroundColor: '#d6dffe'}} item md={7} sm={12} xs={12}>
                        <div>
                            
                            <label htmlFor="context">Enter Context Here</label>
                            <input
                                id="context"
                                name="context"
                                type="textarea"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.context}
                            />
                            {formik.touched.context && formik.errors.context ? (
                                <div>{formik.errors.context}</div>
                            ) : null}
                        </div>
                    </Grid>
                    <Grid item md={5} sm={12} xs={12}>
                        <label htmlFor="question">Enter your Question here</label>
                        <input
                            id="question"
                            name="question"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.question}
                        />
                        {formik.touched.question && formik.errors.question ? (
                            <div>{formik.errors.question}</div>
                        ) : null}

                        <br></br>
                        
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                        <Button className={classes.browseButton} type="submit">Generate Answer</Button>

                    </Grid>
                    </form>
                </Grid>
            </Paper>
        </div>
    )
}

export default Paragraph_demo;