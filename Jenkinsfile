pipeline{
  agent any 
      tools {
          nodejs "NodeJS"
      }
      parameters{
          string(name: 'SPEC', defaultValue:"cypress/integration/1-getting-started/firsttest.js", description: "Enter the cypress script path that you want to execute")
          choice(name: 'BROWSER', choices:['electron', 'chrome', 'edge', 'firefox'], description: "chrome")
      }
stages{
    stage('Build/Deploy app to staging') {
        parallel{
            stage('Staging Server') {
                steps {
                    sshPublisher(
                    publishers: [
                    sshPublisherDesc(
                    configName: 'staging',
                    transfers: [
                    sshTransfer(
                    cleanRemote: false,
                    excludes: 'node_modules/', 
                    execCommand: '''
                    cd MyPB
                    npm ci
                    ng serve -o''',
                    execTimeout: 600000, 
                    flatten: false, 
                    makeEmptyDirs: false, 
                    noDefaultExcludes: false, 
                    patternSeparator: '[, ]+', 
                    remoteDirectory: '', 
                    remoteDirectorySDF: false, 
                    removePrefix: '', 
                    sourceFiles: 'MyPB/**/*')], 
                    usePromotionTimestamp: false, 
                    useWorkspaceInPromotion: false, 
                    verbose: true)])
                }
            }
            stage('Performance'){
                steps {
                  sh "jmeter -n -t /var/lib/jenkins/workspace/MYPBApppipeline@2/MyPB/MyPBPerformanceTest.jmx"
                }
            }
        } 
    }  
            stage('Run automated tests') {
                steps {
                   echo 'Running automated tests'
                }
            }
            stage('Perform manual testing') {
                steps {
                  echo 'Performing manual testing '
                }
            }
            stage('Release to production') {
                steps {
                  echo 'Releasing to production'
                }
            }
    stage('Run Tests') {
        parallel {
            stage('End-to-End Tests') {
                steps {
                    dir ('/var/lib/jenkins/workspace/MYPBApppipeline@2/MyPB/cypress/endtoendtest'){
                        sh "npm install cypress --save-dev"
                        sh "npx cypress run"
                    }
                    
                }
            }
            stage('Static Analysis') {
                environment {
                    SCANNER_HOME = tool 'sonarscanner'
                }
                steps {
                    dir('MyPB'){
                    sh "pwd"
                    sh "$SCANNER_HOME/bin/sonar-scanner"
                    }
                }
            }
        }

    }
    
}
}

