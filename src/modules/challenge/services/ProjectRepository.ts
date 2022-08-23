import { BehaviorSubject, Observable } from 'rxjs'
import { Project, ProjectStatus } from '../domain'

const INITIAL_MOCK_DATA_ENABLED = true

export class ProjectRepository {
  private projectsSubject = new BehaviorSubject<Project[]>(
    INITIAL_MOCK_DATA_ENABLED ? INITIAL_MOCK_DATA : [],
  )

  projects: Observable<Project[]>

  constructor() {
    this.projects = this.projectsSubject
  }

  addProject(project: Project) {
    this.projectsSubject.next([...this.projectsSubject.getValue(), project])
  }
}

const INITIAL_MOCK_DATA: Project[] = [
  {
    status: ProjectStatus.Prospect,
    name: 'A project',
    description: 'We want to change the entire world and we will do it',
  },
]
