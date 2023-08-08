const express = require("express");
const router = express.Router();
const connection = require("../db/dbconnect");
const { json } = require("body-parser");

router.get("/employees", (req, resp) => {
  connection.query("select * from employee", function (err, data) {
    if (err) {
      resp.status(500).send("invalid query " + JSON.stringify(err));
    } else {
      console.log("inside get method")
      resp.send(data);
    }
  });
});



router.get("/employees/employee/:empid", (req, resp) => {
  connection.query("select * from employee where empid=?",[req.params.empid],(err, data) => {
      if (err) {
        resp.status(500).send("error " + JSON.stringify(err));
      } else {
        resp.send(data[0]);
      }
    });
});



router.post("/employee/employee/:empid", (req, resp) => {
  var empi = req.body.empid;
  var enam = req.body.ename;
  var sa = req.body.sal;

  connection.query(
    "insert into employee values(?,?,?)",
    [empi, enam, sa],
    (err, data) => {
      if (err) {
        resp.status(500).send("invalid query" + JSON.stringify(err));
      } else {
        if (data.affectedRows > 0) {
          resp.send("{'msg' : 'inserted successfully !!!!!'}");
        } else {
          resp.send("{'msg' : 'not inserted ?!!!'}");
        }
      }
    }
  );
});
.



router.put("/employee/employee/:empid", (req, resp) => {
  var empi = req.body.empid;
  var enam = req.body.ename;
  var sa = req.body.sal;
  connection.query(
    "update employee set ename=?, sal=? where empid=?",
    [enam, sa, empi],
    (err, data) => {
      if (err) {
        resp.status(500).send("error " + JSON.stringify(err));
      } else {
        if (data.affectedRows > 0) {
          resp.send("data inserted successfully !!!!!!!!!!");
        } else {
          resp.status(500).send("data not found");
        }
      }
    }
  );
});



router.delete("/employee/employee/:empid", (req, resp) => {
  connection.query(
    "delete from employee where empid=?",
    [req.params.empid],
    (err, data) => {
      if (err) {
        resp.status(500).send("err" + JSON.stringify(err));
      } else {
        if (data.affectedRows > 0) resp.send("deleted successfully !!!!!!");
        else resp.status(500).send("data not found");
      }
    }
  );
});

module.exports = router;
