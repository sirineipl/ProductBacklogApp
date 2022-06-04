pipeline{
agent any 
tools {nodejs "NodeJS"}
      parameters{
          string(name: 'SPEC', defaultValue:"cypress/integration/1-getting-started/todo.spec.js", description: "Enter the cypress script path that you want to execute")
          choice(name: 'BROWSER', choices:['electron', 'chrome', 'edge', 'firefox'], description: "Select the browser to be used in your cypress tests")
      }

      options {
              ansiColor('xterm')
      }
stages {
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
                 execCommand: 'echo ‘Replace me by your build/install scripts’ ',
                 cd MyPB
                 npm i
                  pm2 restart MyPB'',
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
}
agent none
 stages {
 stage('Run Tests') {
 parallel {
 stage('End-to-End Tests') {
 agent {
 label "tests"
 }
steps {
 sh "MyPB\cypress"
 }
 }
 stage('Static Analysis') {
 agent {
 label "sonarqube"
 }
steps {
 sh "..\..\sonar-scanner-4.7.0.2747-windows\bin\sonar-scanner-debug.bat”
 }
 }
 }
 }
 }

}
