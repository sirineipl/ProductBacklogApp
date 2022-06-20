pipeline{
  agent any 
      tools {
          nodejs "NodeJS"
      }
      parameters{
          string(name: 'SPEC', defaultValue:"cypress/integration/1-getting-started/firsttest.js", description: "Enter the cypress script path that you want to execute")
          choice(name: 'BROWSER', choices:['electron', 'chrome', 'edge', 'firefox'], description: "chrome")
      }
/*      options {
          ansiColor('xterm')
      }*/
stages{
    stage('Build/Deploy app to staging') {
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
                cd MyPBgit 
                npm i
                npm2 restart MyPB''',
                execTimeout: 120000, 
                flatten: false, 
                makeEmptyDirs: false, 
                noDefaultExcludes: false, 
                patternSeparator: '[, ]+', 
                remoteDirectory: '', 
                remoteDirectorySDF: false, 
                removePrefix: '', 
                sourceFiles: 'MyPB/*')], 
                usePromotionTimestamp: false, 
                useWorkspaceInPromotion: false, 
                verbose: true)])
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
               /* agent {
                    label "tests"
                }*/
                steps {
                    sh "MyPB/cypress"
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
    stage('Deployment to Staging Server') {
        parallel {
            stage('Staging Server') {
                   agent {
                    label "staging"
                   }
                steps {
                    sh "<path_to_deploy_to_staging>"
                }
            }
            stage('Performance') {
                   agent {
                    label "jmeter"
                    }
                steps {
                  sh "<path_to_run_jmeter_with_all_the_options>"
                }
            }
        }
    }
}
}