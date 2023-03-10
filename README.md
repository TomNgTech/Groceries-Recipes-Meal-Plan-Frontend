# Groceries - Recipes - Meal Plans React App

General info about the app

## Recipes
 Recipes are listed in the Recipes page. Each recipe has a title and a list of ingredients. The user can add a new recipe, edit an existing recipe, and delete a recipe. 

 - Creating a new recipe: The user can add a new recipe by clicking on the "Add Recipe" button. The user can add a title by typing in the textbox. The user adds ingredients via selecting the checkbox in the list of ingredients on the right side and adjust quanity of ingredients in the list on the left. The user can also remove ingredients from recipe by unselecting the checkbox. The user can save the recipe by clicking on the "Submit" button. The user can exit the form by either clicking "Submit" or clicking off-modal. A recipe has to have a title and at least one ingredient.

 - Editing an existing recipe: The user can edit an existing recipe by clicking on an existing recipe. A modal pops up with title and further information about the ingredients' quanity and measurment unit. The user can edit the title, the list of ingredients and quanity of ingredients. The user can save the recipe by clicking on the "Update Recipe" button. The user can exit the form by either clicking "Update Recipe" or clicking "Close Modal". A recipe has to have a title and at least one ingredient.

 - Deleting an existing recipe: The user can delete an existing recipe by clicking on the trash can icon. Deleted recipes cannot be recovered. Deleted recipes should be removed from respective mealplans

## Ingredients
 Ingredients are listed in a scrollview in the recipe creation/edit screens. Each ingredient has a name, a unit, and a quantity.
 The user can add a new ingredient below the scrollview. An ingredient must have a name and a unit from predefined list of units. After selecting "Add To Options", the ingredient appears in list of available ingredients. To delete an ingredient, click the trash can icon and it's removed from list.

## Mealplans
 Mealplans are listed in the Mealplans page. Each mealplan consists of list of recipes for an associated month. The user can add recipes to a mealplan for a given month and remove recipes from a mealplan for a given month. Each month's mealplan can be converted to CSV format and downloaded.
 
 On the mealplans page, there are cards for each month which indicate the number of recipes for a given month. Clicking on "View Month Plan" will pull up a modal which lists the recipes planned for a given month including serving size and week. The user can add a recipe to a given month by selecting its checkbox from the scrollview similar in nature to the ingredients scrollview. The user can remove a recipe from a month by unselecting the checkbox. 

 Recipes can adjust serving size and week. The user can save the mealplan by clicking on the "Edit Month Plan" button. It can be exported to CSV by clicking on "Export to CSV". The user can exit the form by clicking either button or clicking off-modal.

## State Management
The app uses useState hooks for state management and does not use external packages such as Redux. 

- Recipes: The state for recipes is managed in the Recipes component. The Recipes component passes down the recipes state and setRecipes hook to Add Recipe component and selectedRecipe state as well as setSelectedRecipe hook to RecipeDetails to allow modifications. In RecipeDetails, the selected recipe's ingredient list is passed down to DisplayRecipeIngredients component. Modification made via edit recipe are set via setSelectedRecipe hook.

- Ingredients: The state for ingredients is managed in the IngredientOptions component. As it has no children, it does not need to pass down its state. When a new ingredient is added, the ingredient is added to the ingredients state via setNewIngredientData hook and addNewIngredientOption function.

- Mealplans: The state for mealplans is managed in the Mealplans component. The Mealplans component passes down the month, mealplan and number of recipes to the MealPlanCard component as well as a callback function to open a modal for editing said mealplan. In the editing modal, EditMonthRecipes, the selected month's mealplan is modified via setCurrentViewedRecipes hook which modifies the recipes currently associated with the month and "handleEditSubmission" function which updates the month's mealplan on the backend. This modification will trigger a re-render of the Mealplans component which will fetch the mealplans from server and update number of recipes for each month.


## Cloud Architecture

The React front-end Groceries - Recipes - Meal Plans app was created and maintained using the following **AWS** Cloud Resources:

- 1 set of AWS public **Virtual Private Cloud**: 1 VPC + 2 Subnets + 1 Route Table + 1 Network Connection (Internet Gateway)

- 1 set of AWS **Security Groups Policy** to allow public internet traffic to access the EC2 instance.

- 1 AWS **EC2** instance (ubuntu 20.04) functions as a web server to serve static HTML/CSS/Javascript files (compiled using `npm run build` within the React app).

- 1 AWS **Elastic IP Address** attached to the EC2 instance so that the public IP address of the React app will not change in case of a sudden server shutdown.

### Create AWS VPC

Visit [AWS Official Document](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-getting-started.html) to learn how to create a new or use the default VPC:

### Create AWS Security Group Policy

Visit [AWS Official Document](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) for more details.

The EC2 instance should have these inbound ports open:

- 443: used for https
- 80: used for http
- 22: used for ssh

### Create AWS EC2 Instance

Visit [AWS Official Document](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html) on how to create an AWS EC2 instance. We used `ubuntu 20.04` for our server's operating system.

Once the server has been created, ssh into the server and install these 2 items:

1. git clone for `https://github.com/TungTNg/Groceries-Recipes-Meal-Plan-Frontend` inside the user home directory. In our case it was `/home/ubuntu`
2. install nginx to serve the static files compiled by React. The snippet for the setting listed below is the one we used:

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;
                root /home/ubuntu/Groceries-Recipes-Meal-Plan-Frontend/build;
        server_name _;
        location / {
                try_files $uri $uri/ =404;
        }
}
```

### Create AWS Elastic IP Address

Visit [AWS Official Document](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) for how to create an Elastic IP Address and attach it to your EC2 instance

## Continuous Integration / Continuous Delivery (CI/CD)

The React front-end Groceries - Recipes - Meal Plans app uses [GitHub Actions](https://github.com/features/actions) for both CI & CD pipelines. Continuous Integration (CI) pipeline will run checks for new PR requesting to be merged into `main`. Continuous Delivery (CD) pipeline will deploy code changes to production server once the PR has been merged.

### Continuous Integration (CI) Pipeline

The workflow `.yml` file for CI is inside `.github/workflows` folder, named `test.workflow.yml`. With this workflow file, GitHub Actions's runner will run these checks once a PR is being opened or if there is a new commit pushed to that PR:

- `npm run test`: This will run all of the Jest/React Testing Library test files/cases inside the project
- `npm run lint`: This will check code format for the project

This workflow use [GitHub Action - setup-node package](https://github.com/actions/setup-node)

### Continuous Delivery (CD) Pipeline

The workflow `.yml` file for CD is inside `.github/workflows` folder, named `deploy.workflow.yml`. With this workflow file, GitHub Actions's runner will ssh into the production server and run these command lines:

- `cd ~/Groceries-Recipes-Meal-Plan-Frontend/`: Go into the project folder, residing in `ubuntu` user `home` folder
- Check out the newly updated remote `main` branch, pull in the latest code changes and do a fresh `npm build` with:

```
git checkout main
git fetch --all
git reset --hard origin/main
git pull origin main
npm install
npm run build
```

- `sudo service nginx restart`: Restart nginx server since nginx will be the main web server to serve static, compiled HTML/CSS/Javascript files inside the `build` folder

This workflow use [GitHub Action - Appleboy's ssh-action](https://github.com/appleboy/ssh-action)

In order for the Action to able to access & ssh to the production server, please add these `secrets` into the Github project settings:

- `SSH_HOST`: public accessible IP address of the production server
- `SSH_KEY`: ssh key of authorized user for the server
- `SSH_PORT`: 22 (default port for ssh)
- `SSH_USERNAME`: authorized username that can use the ssh key, in my case it was `ubuntu`

# Next Steps
- Users/Authentication:
The primary next step for development would be the use of individual users/profiles and authentication as it currently is open to anyone that accesses the site/app. Questions that would need to be answered: Are recipes shared between users? Are ingredients?

- Pictures with recipe 
Additionally, to add to the aesthetic value, it would be helpful to allow the upload of images to associate with recipes. These images would be viewed in the RecipeDetails component and potentially could support  carousel of featured recipes in other parts of the site. 

- Calendar view/functionality
Currently, the mealplans are viewed via card and modal. Users may find it more useful to have a calendar for a given month which shows when they plan to have meals. In addition to Frontend work, this would likely require more fine-toothed details in the mealplan schema to support a mealplans being associated with certain days. 

- Creation of saved/standard mealplans
Some users may enjoy regular or recurring mealplans or a base mealplan to start from for a given week or month. Adding this functionality would require work on both backend and frontend as well as experimentation for how best to integrate such feature into the app.

## Available Scripts


### `npm start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

