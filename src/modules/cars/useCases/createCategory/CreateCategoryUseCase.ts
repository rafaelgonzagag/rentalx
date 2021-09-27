import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRespository";

interface IRequest {
    name:string;
    description: string;
}
@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}

    async execute({ description, name }: IRequest): Promise<void> {
        
        const cateogoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if(cateogoryAlreadyExists) {
            throw new Error("Category Already exists!");
        }
    
        this.categoriesRepository.create({ name, description });
    }

}

export { CreateCategoryUseCase };