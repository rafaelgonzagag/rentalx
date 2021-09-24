import { ICategoriesRepository } from "../../repositories/ICategoriesRespository";

interface IRequest {
    name:string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ description, name }: IRequest): void {
        
        const cateogoryAlreadyExists = this.categoriesRepository.findByName(name);

        if(cateogoryAlreadyExists) {
            throw new Error("Category Already exists!");
        }
    
        this.categoriesRepository.create({ name, description });
    }

}

export { CreateCategoryUseCase };