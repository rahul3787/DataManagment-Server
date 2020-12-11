import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

import { Pie } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

let rowsData = [];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Display = () => {
  const classes = useStyles();

  let pngCount = 0;
  let jpegCount = 0;
  let pdfCount = 0;
  let otherCount = 0;

  const [display, setDisplay] = useState({
    allData: [],
  });

  useEffect(() => {
    getBlogPost();
  }, []);

  let getBlogPost = () => {
    console.log("api checking");
    axios
      .get("https://serverhhhhhhhhh.herokuapp.com/api")
      .then((response) => {
        const data = response.data;

        console.log(data, "data");

        setDisplay({ allData: data });
      })
      .catch(() => {
        console.log("error");
      });
  };
  console.log(display);

  display.allData.map((data, index) => {
    console.log("i am call");
    rowsData.push({
      id: index,
      title: data.title,
      body: data.body,
      mimetype: data.mimetype,
      fileName: data.fileName,
    });

    if (data.mimetype == "image/png") {
      pngCount++;
    } else if (data.mimetype == "image/jpeg") {
      jpegCount++;
    } else if ((data.mimetype = "application/pdf")) {
      pdfCount++;
    } else {
      otherCount++;
    }
  });

  let state = {
    labels: ["png", "jpeg", "pdf", "others"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [pngCount, jpegCount, pdfCount, otherCount],
      },
    ],
  };

  const tableHeader = ["ID", "TITLE", "BODY", "TYPE", "FileName"];

  const TableHeaderData = () => {
    return tableHeader.map((data, index) => <th>{data}</th>);
  };

  console.log(rowsData, "RowsData");

  console.log(
    pngCount,
    "pngcount \n",
    pdfCount,
    "pdfCount \n",
    jpegCount,
    "jpegCount \n",
    otherCount,
    "othercount"
  );

  return (
    <div className="App">
      <div>
            <h1 style={{textAlign:"center", marginBottom:"40px"}}>Data</h1>
          
            </div>

      <Grid container>

        <Grid item xs={6} >
          <div>
            <table id="tableFileData">
              <tr>{TableHeaderData()}</tr>

              <tbody>
                {display.allData.map((data, index) => (
                  <tr>
                    <td>{index}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                    <td>{data.mimetype}</td>
                    <td>{data.fileName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Grid>
        <Grid item xs={6} >
          <div style={{ height: "100%", width: "100%" }}>
            <Pie
              data={state}
              options={{
                title: {
                  display: true,
                  text: "DATA PIE CHART",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Display;
