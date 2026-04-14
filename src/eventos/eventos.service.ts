import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Evento } from './entities/evento.entity';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private readonly eventosRepository: Repository<Evento>,
  ) {}

  async create(createEventoDto: CreateEventoDto) {
    const evento = this.eventosRepository.create(createEventoDto);
    return this.eventosRepository.save(evento);
  }

  async findAll() {
    return this.eventosRepository.find();
  }

  async findOne(id: number) {
    return this.eventosRepository.findOneBy({ id });
  }

  async update(id: number, updateEventoDto: UpdateEventoDto) {
    await this.eventosRepository.update(id, updateEventoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const evento = await this.findOne(id);
    if (!evento) {
      throw new NotFoundException(`Evento con id = ${id} no encontrado`);
    }
    await this.eventosRepository.remove(evento);
    return `Evento con id = ${id} eliminado`;
  }
}
