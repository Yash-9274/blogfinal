import {Embed} from "powerbi-client-react";
import * as models from 'powerbi-models';


function App1(){
    <div className = "App-header">
    <Embed
      embedConfig = {
      {   
          type: 'report', // Supported types: report, dashboard, tile, visual, and qna.
          id: '7ea52e41-f3e2-4baf-bbd5-88f0fd06e872',
          embedUrl:"https://app.powerbi.com/reportEmbed?reportId=7ea52e41-f3e2-4baf-bbd5-88f0fd06e872&groupId=ba61bb50-d3ac-4706-b6f1-47e4202b5acd&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
          accessToken:'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNTM0OWE0ZGMtYTM1MC00NWZmLWI3YjUtZmZiZDVjNWZjNTczLyIsImlhdCI6MTY4Mzk2Nzk0OCwibmJmIjoxNjgzOTY3OTQ4LCJleHAiOjE2ODM5NzI3OTEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFjTUdRMUFEWTZrZGpuaTZWYVM4amFxTmozUFhZWFBWQVcySThEZEJ3b1NDMjNlT0srQUthdUMrVE9wakpZT1pIIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiRG9ncmEiLCJnaXZlbl9uYW1lIjoiRXNoZSIsImlwYWRkciI6IjE0LjEzOS4yNDIuMTk1IiwibmFtZSI6IkVzaGUgRG9ncmEiLCJvaWQiOiIwMmM1N2YwYi1lNDE4LTQwYTItODIyMS03ZGRjNTdhMmQ4YTciLCJwdWlkIjoiMTAwMzIwMDJBMEI0NTg4RCIsInJoIjoiMC5BWElBM0tSSlUxQ2pfMFczdGYtOVhGX0Zjd2tBQUFBQUFBQUF3QUFBQUFBQUFBQnlBQnMuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiTHRJVU5mbFZmT2RDX29SQS1vWEw2TkV6dzFvbEF1ekJEdWJ4M0MzOE1CcyIsInRpZCI6IjUzNDlhNGRjLWEzNTAtNDVmZi1iN2I1LWZmYmQ1YzVmYzU3MyIsInVuaXF1ZV9uYW1lIjoiZXNoZS5kb2dyYTIwQHN0Lm5paXR1bml2ZXJzaXR5LmluIiwidXBuIjoiZXNoZS5kb2dyYTIwQHN0Lm5paXR1bml2ZXJzaXR5LmluIiwidXRpIjoiaUJGejVfZXhwVUdWZnU4OTF2OEdBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.kz616ESswUyaF6w3eBhIBaO6BxFkZdYaAs3S-PuP8IwDe5D91uDPD5cl-jV6PlqRI3lQZVU_Bj8EtBM5qh9BDcCEmzdRiWjNAlHruXYxNg2n_t4ntxl7kd1waBfNZiDTI4nwj_ELNGlHpGKFedKAGzbhnNQf0_OWKZ1G4VluyxNiRKN2qGBf7nbhZZgc2O989JnI9oypxJRONxG-HNBMW8OY4X-Y3TuIlfrGLn4Yq2ttXvVgJhZLLlVmiSW9juATjpc_9j5AKGEvTPWnACyBos9ctSuvWHPTvWStHHr2XN0ABS98VI8es2qg2_OFkkjr4MUQeFmLI7lyguOrqZkwcw',
          tokenType: models.TokenType.Aad, // Use models.TokenType.Aad if you're embedding for your organization.
           settings: {
             panes: {
                filters: {
                    expanded: false,
                    visible: false
                }
            },
        }
    }
  }
  
     eventHandlers = {
      new Map([
        ['loaded', function () {
            console.log('Report loaded');
        }],
        ['rendered', function () {
            console.log('Report rendered');
        }],
        ['error', function (event) {
            console.log(event.detail);
        }]
    ])
  }
  
  cssClassName = {
    "report-style-class"
  }
  
  getEmbeddedComponent = {
    (embeddedReport) => {
        window.report = embeddedReport;
    }
  }
  
  
/>
    </div>
  }
export default App1;