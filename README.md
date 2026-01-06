# RN Auth Firebase

Simple React Native application demonstrating basic authentication using Firebase.

## Features

- User registration with email and password
- - User login/logout functionality
  - - Firebase Authentication integration
    - - Token management and storage
      - - Welcome screen with authentication status
        - - Splash screen on app launch
         
          - ## Requirements
         
          - - Node.js 18 or above
            - - React Native development environment
              - - Firebase account and project
               
                - ## Installation
               
                - 1. Clone this repository:
                  2. ```bash
                     git clone https://github.com/maumercado/RN_Auth_firebase.git
                     cd RN_Auth_firebase
                     ```

                     2. Install dependencies:
                     3. ```bash
                        npm install
                        ```

                        3. Configure Firebase:
                        4.    - Create a Firebase project at https://console.firebase.google.com
                              -    - Enable Email/Password authentication in Firebase Console
                                   -    - Add your Firebase configuration to the project
                                    
                                        - 4. Run the application:
                                         
                                          5. For iOS:
                                          6. ```bash
                                             npm run ios
                                             ```

                                             For Android:
                                             ```bash
                                             npm run android
                                             ```

                                             ## Project Structure

                                             - `components/` - Reusable UI components
                                             - - `screens/` - Application screens
                                               - - `store/` - State management and authentication logic
                                                 - - `constants/` - Application constants
                                                   - - `utils/` - Utility functions
                                                    
                                                     - ## Technologies
                                                    
                                                     - - React Native
                                                       - - Firebase Authentication
                                                         - - React Context API for state management
