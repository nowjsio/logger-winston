# logger-winston
## [Run] sample script        
- dev: **yarn run dev**
    - terminal stdout (O), log-file (O)
- prod: **yarn run prod**
    - terminal stdout (X), log-file (O)
 ## log directory
- log directory: **/logger-winston/logs**
    - info log: **/logs/info/yyyy-MM-dd.info.log**
    - error log: **/logs/error/yyyy-MM-dd.error.log**
    - exception log: **/logs/exception/yyyy-MM-dd.exception.log**
## log format
- console-info-log 
    - **yyyy-MM-dd-hh-mm-ss-SSS : log-level : message :**
- console-error-log 
    - **yyyy-MM-dd-hh-mm-ss-SSS : log-level : message : \t error.stack**
- log-file-info-log 
    - **yyyy-MM-dd-hh-mm-ss-SSS : log-level : message :**
- log-file-error-log 
    - **yyyy-MM-dd-hh-mm-ss-SSS : log-level : message : \t error.stack**

## log rotate
- save for 2 moths
    - example:
        - current date : 2022-06
        - logs/info/2022-04-*, 2022-05-*, 2022-06-*
        - deleted logs/info/2022-03-*




*reference:https://github.com/winstonjs/winston*