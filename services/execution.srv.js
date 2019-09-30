'use strict'
const shell = require('shelljs');
const fs = require('fs');
var resemblejsCompare = require('resemblejs').compare;
Promise = require('promise');

module.exports.compare = function(req,success,error){
   

            var timestamp = (new Date()).getTime();
            var execution = {
                insertionDate: new Date(),
                timestamp: timestamp,
                beforeImgUri: `/Users/adriana.bonilla/Documents/u/palette/cypress/screenshots/paleta1.png`,
                afterImgUri: `/Users/adriana.bonilla/Documents/u/palette/cypress/screenshots/paleta2.png`
            };

            const options = {
                // stop comparing once determined to be > 5% non-matching; this will
                // also enable compare-only mode and no output image will be rendered;
                // the combination of these results in a significant speed-up in batch processing
                returnEarlyThreshold: 5
            };


            return new Promise((resolve, reject) => {
                const options = {};
                console.log(execution.beforeImgUri);
                resemblejsCompare(execution.beforeImgUri, execution.afterImgUri, options, function (err, data) {
                    if (err) reject(err);   
                    else        {
                        console.log(data);
                    }                     
                    fs.writeFile(`/Users/adriana.bonilla/Documents/u/palette/report/comparation.png`, data.getBuffer(), (err) => {                
                        if (err) reject(err);
                        execution.comparation = data;
                        execution.comparationImgUri = `/Users/adriana.bonilla/Documents/u/palette/report/comparation.png`;
                        console.log('report '+JSON.stringify(execution))
                        success(execution);
                    });
                });
            
        });

    }
