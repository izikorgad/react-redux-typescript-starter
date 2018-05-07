# Jethro Manager Frontend Project

## Quickstart guide

- Install node latest (v7+) https://nodejs.org/en/download/current/
- We recommend to Install webstorm but you can also go with vscode or any other editor.

- Git clone your repos (get access from Ahikam):
   - https://github.com/JethroDataATE/JethroGUIBackend.git
   - https://github.com/JethroDataATE/JethroGUI.git


To install all dependencies, run

```
npm install
```

Then you should run the app itself in development mode by

```
npm start
```

After that you may point your browser to localhost:7000

Enjoy.

## Configuration

You should configure config/development.js to specify backend URL, in example:

```javascript
{
  baseUrl: 'http://54.191.145.106:9000'
}
```

# Documentation

- In case you don't have previous experience with React, you can start getting familiar with it: https://facebook.github.io/react/
- Redux http://redux.js.org/docs/introduction/
- Redux-Saga https://github.com/redux-saga/redux-saga

# Project Structure

```
.
├── config
│   └-- development.js                   # config to specify backend URL
├── src                                  # Project source code
│   ├── businessLogic                    # Business logic code is supposed to be here
│   │   ├── tests                        # Folder consists of business logic tests
│   │   ├── constants.ts                 # App wide constants 
│   │   ├── csvUtils.ts                  # Functions related to parse file preview.
│   │   ├── dataTypeDetector.ts          # Functions related to detect row dataType.
│   │   ├── descFile.ts                  # Functions related to create/parse descriptions file.
│   │   ├── mapping.ts                   # Functions related to create "mapping", which is existing tables data representations inside the app
│   │   ├── matchingPercentage.ts        # Functions related to match tables and get match percent
│   │   └── serverApi.ts                 # Functions to work with server REST api
│   ├── components                       # React components
│   │   ├── AccountPage                  # Component to display account page
│   │   ├── App                          # Main app component, contains logic to display and work with login form and spinner.
│   │   ├── Autosuggest                  # Autocomplete component
│   │   ├── Forms                        # Folder contains main project forms
│   │   │   └──  ErrorMessage            # Component to display error form.
│   │   ├── Header                       # Component to display header and breadcrumbs.
│   │   ├── InstanceWizard           # Components that makes installation wizard
│   │   │   ├── CreateInstances          # Last page of instance create flow.
│   │   │   │   ├── CreateInstanceForm   # Instance creation form
│   │   │   │   └── InstanceSelector     # Instance selector
│   │   │   ├── Home                     # Unused component previously used to display the IW page zero.
│   │   │   ├── RootPath                 # RootPath selection form, IW page 2.
│   │   │   ├── SettingUpStorage         # Component to display result of create/attach instance operation.
│   │   │   ├── StorageSetting           # IW page 1.
│   │   │   │   ├── StorageFilesystemSelector  # local/hdfs/nfs filesystem selector
│   │   │   │   └── StorageSettingsForm        # Instance creation form
│   │   │   └── WizardSteps              # IW steps(page) counter.
│   │   │       ├── WizardStepsCounter         # Wizard page number
│   │   │       └── WizardStepsList            # Wizard page icons list
│   │   ├── LoadManager                  # Load flow located here
│   │   │   ├── DataTable                # Past downloads table, sorted params and search input
│   │   │   │   ├── utils.ts             # Functions to compute timestamp masks
│   │   │   │   └── redux.ts             # Actions and reducersdisplay/change 
│   │   │   ├── DescriptionParametrs     # delimiters/escapes/.../maxRejects selectors and inputs
│   │   │   ├── DragAndDropRow           # Drag&drop of a row
│   │   │   ├── EditLoadParameters       # The main component for load flow page 3, contains source and target tables and inputs/selectors, preview logic│   │   │   │   └── utils.ts                             # Functions to filter and sort past loads
│   │   │   ├── ELPEysContainer          # "Eyes" next to the selected rows.
│   │   │   ├── ELPMatching              # Matching arrows between the rows.
│   │   │   ├── ELPPreview               # Data preview for selcted row
│   │   │   │   └── utils.ts             # Table names and columns data for preview
│   │   │   ├── ELPSelectSource          # Source table file selector
│   │   │   ├── ELPSelectTarget          # Target table tables selector, contains logic to calculate matching
│   │   │   ├── ELPSourceTable           # Source table with row skipping
│   │   │   ├── ELPTargetTable           # Target table component
│   │   │   ├── FilePreview              # Selected file or Hive/Impala data preview
│   │   │   │   └── utils.ts             # functions to display selected delimiters/quotes/escapes and skipped lines on filePreview
│   │   │   ├── ELPPreview               # Selected row data perview
│   │   │   ├── FileList                 # UNUSED COMPONENT
│   │   │   ├── FileSelectorPage         # Load flow page 1, contains the filePreview and DescriptionParameters and fileTree components 
│   │   │   │   ├── utils.ts             # File tree utility functions
│   │   │   │   └── treeStyle.ts         # Styles for fileTree
│   │   │   ├── FilterLoads              # DataTable -- uploads table
│   │   │   ├── GaugesPanel              # UNUSED COMPONENT
│   │   │   ├── InstanceSelector         # Instance selector flow, instance update and error handling
│   │   │   │   ├── sagas.ts             # Instance selector sagas, contains async instance list request and change instance on server side flow
│   │   │   │   ├── actions.ts           # Actions file
│   │   │   │   └── redux.ts             # Actions and reducers
│   │   │   ├── LoadParametersConstructorPage # UNUSED COMPONENT
│   │   │   ├── LoadReport               # Load report, status icon logic duplicate
│   │   │   │   ├── utils.ts             # Utility functions
│   │   │   │   ├── sagas.ts             # Sagas for edit&repeat async functionality
│   │   │   │   └── reudux.ts            # Actions and reducers for get/set instance on server-side and change instance on fronend
│   │   │   ├── LoadMonitor              # Load Monitor component, contains DataTable and FilterLoads components
│   │   │   │   ├── sagas.ts             # Load monitor sagas, contains async functions to update loads list
│   │   │   │   ├── tablesInfoParser.ts  # Parse loads list from server 
│   │   │   │   ├── utils.ts             # functions to handle "fake" load records 
│   │   │   │   └── redux.ts             # Actions and reducers
│   │   │   ├── MatchingLvl              # Matching lvl text
│   │   │   ├── MatchPercentage          # Matching percent
│   │   │   ├── sagas                    # Folder contains the business logic async functions
│   │   │   │   ├── tests                     # tests for main saga functions
│   │   │   │   ├── csvSagas.ts               # functons to update and parse filePreview according with delimiters and build mapping
│   │   │   │   ├── descFileSagas.ts          # functions to get and parse descFile, and get desc file params from view before write it
│   │   │   │   └── upload.ts                 # one big async saga function to create new table on JDBC and add fake records in case when load is success
│   │   │   ├── Search                   # UNUSED COMPONENT
│   │   │   ├── SelectLoadSourcePage     # LoadSource selector
│   │   │   ├── Speedometer              # UNUSED COMPONENT
│   │   │   ├── TableColumnsList         # UNUSED COMPONENT
│   │   │   ├── TableHeader              # UNUSED COMPONENT
│   │   │   ├── TablePreview             # UNUSED COMPONENT
│   │   │   ├── tests                    # Tests for some load flow and folder tree
│   │   │   ├── TimestampModal           # Timestamp modal window. Change, save and other timestamp-related logic
│   │   │   ├── treebeard                # Patched react-treebeard component
│   │   │   ├── WaterFilledTank          # UNUSED COMPONENT
│   │   │   ├── actions.ts               # The main app actions file
│   │   │   ├── reducer.ts               # The main app reducers file
│   │   │   ├── sagas.ts                 # The main sagas file
│   │   │   └── utils.ts                 # The main utils file
│   │   ├── Modals                 # folder contains the main app modal window
│   │   │   ├── Confirm                  # Confirm modal component
│   │   │   ├── Error                    # Error modal component
│   │   │   ├── Login                    # Login modal component
│   │   │   └── Success                  # Success modal component
│   │   ├── Navbar                 # Left side navigation bar
│   │   ├── NavButtons             # IW navigation buttons, contains verification logic. 
│   │   ├── notFoundPage           # Not found page
│   │   ├── PathAutosuggect        # Expand Autosuggest functionality for Paths.
│   │   │   └── utils.ts                 # Utilities file
│   │   ├── ServerPage             # The main component of system page
│   │   │   ├── redux.ts                 # Redux file, contains only those actions that are used on ServerPage
│   │   │   └── sagas.ts                 # Sagas file, contains async functions to send ssh key to server, check user ssh key and get current user nodeIP
│   │   ├── WelcomePage            # Welcome page, this is the first app page that user sees
│   │   └── Wizard                 # IW Logic is here
│   │       ├── saga                     # IW async sagas 
│   │       │   ├── checkingFunctionality.ts  # Utility functions
│   │       │   └── navigation.ts             # Navigation-related functions on IW
│   │       ├── tests                    # folder contains tests for the IW
│   │       ├── actions.ts               # The main IW actions file
│   │       ├── constants.ts             # UNUSED FILE
│   │       ├── index.tsx                # The main IW component
│   │       ├── interfaces.ts            # UNUSED FILE
│   │       ├── reducer.ts               # The main IW reducer
│   │       ├── sagas.tsx                # the main IW saga file
│   │       ├── utils.ts                 # little utils file, there is only one func to generate default root path
│   │       └── validation.ts            # IW validation functional
│   ├── reducers              # root reducer and the initial state
│   ├── sagas                 # root saga and the sagaMonitor
│   ├── store                 # redux-store config
│   ├── stories               # Storybook folder
│   ├── styles                # looks like old, unused scss files
│   ├── tests                 # UNUSED EMPTY FOLDER
│   ├── favicon.ico           # app favicon
│   ├── index.html            # Start page
│   ├── index.js              # Entry point of app
│   └── routes.js             # all of the app routes.
├── tools                     # Node scripts that run build related tools
│   ├── build.js              # Runs the production build
│   ├── buildHtml.js          # Builds index.html
│   ├── distServer.js         # Starts webserver and opens final built app that's in dist in your default browser
│   ├── srcServer.js          # Starts dev webserver with hot reloading and opens your app in your default browser
└── webpack.config.js         # Webpack configuration file
```

# Refactor guideline
 - Instance Wizard - 14h
   - > Move sync functions from components/InstanceWizard/saga/checkingFunctionality to validations.ts, add tests - 3h
   - > Add tests into components/InstanceWizard/tests, for now there are many commented test - 6h
   - > Cleanup components/InstanceWizard/actions.ts, remove unused actions, mb it makes sense to concat it with reducer.ts - 1h30m
   - > Split the components/InstanceWizard/sagas.ts to small functions and move them into saga directory. - 1h30m
   - > remove unused files and components - 1h
   - > Move components/InstanceWizard into components/InstanceWizard - 2h
 - LoadsManager - 16.5h
   - > Mb makes sense to concat components/Autosuggest with component/loadsManager/PathAutosuggest, pathAutosuggest looks like component wrapper to Autosuggect. - 1h
   - > To investigate loadsManager/EditLoadParameters, looks like fat component, inner functional should be moved into utils. -1h30m
   - > Remove unused components - 1h30m
   - > loadsManager/FileSelectorPage, validation logic should be moved into utils - 1h
   - > loadsManager/InstanceSelector/actions.ts file should be concat with reducer - 45m
   - > loadsManager/LoadReport looks like functions to get status icon is duplicated the same renderStatus function into dataTable - 45m
   - > loadsManager/LoadMonitor/redux.ts remove unused functions - 30m
   - > loadsManager/reducer.ts move non redux functional into utils.ts, add tests - 3h
   - > loadsManager/sagas add some tests - 6h
