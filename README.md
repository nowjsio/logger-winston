# logger-winston
 ## log directory
- log directory: **/logger-winston/logs**
- info log: **/logs/info/yyyy-MM/yyyy-MM-dd.info.log**
- error log: **/logs/error/yyyy-MM/yyyy-MM-dd.error.log**
## log format
- console 
    - **yyyy-MM-dd-hh-mm-ss-SSS : log-level : message : file-name.file-line**

- log-file
    - **yyyy-MM-dd-hh-mm-ss-SSS : log-level : message**

## log rotate
- save for 2 moths
    - example:
        - current date : 2022-06
        - logs/info/2022-04, 2022-05, 2022-06
        - deleted logs/info/2022-03