class User{

    constructor(name, email, password, projectsCreator, projectsContributor, projectsValidator){
        this.name = name;
        this.email = email;
        this.password = password;
        this.projectsCreator = projectsCreator;
        this.projectsValidator = projectsValidator;
        this.projectsContributor = projectsContributor;
    }

    getPassword(){

    }

    addProjectCreator(project){
        this.projectsCreator.push(project);
    }

    addProjectContributor(project){
        this.projectsContributor.push(project);
    }

    addProjectValidator(project){
        this.projectsValidator.push(project);
    }

    setProjects({projectsContributor, projectsCreator, projectsValidator}){
        this.projectsCreator = projectsCreator;
        this.projectsValidator = projectsValidator;
        this.projectsContributor = projectsContributor;
    }
}