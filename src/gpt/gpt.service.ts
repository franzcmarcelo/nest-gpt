import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases';
import { OrthographyDto } from './dtos';

@Injectable()
export class GptService {

  async orthographyCheck(body: OrthographyDto) {
    return await orthographyCheckUseCase({
      prompt: body.prompt,
    });
  }

}
