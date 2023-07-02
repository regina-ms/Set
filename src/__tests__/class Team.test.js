import Team from '../class Team';
import Character from '../class Characters';

test('should create a team', () => {
  const winTeam = new Team();
  expect(winTeam).toBeInstanceOf(Team);
});

test('should add a character in a team', () => {
  const winTeam = new Team();
  winTeam.add(new Character('ink', 'Bowerman'));
  expect(winTeam.members.size).toBe(1);
});

test('should throw a error "Такой персонаж уже есть в команде!"', () => {
  const winTeam = new Team();
  const ink = new Character('ink', 'Bowerman');
  winTeam.add(ink);
  expect(() => winTeam.add(ink)).toThrow('Такой персонаж уже есть в команде!');
});

test('should add all characters in a team', () => {
  const winTeam = new Team();
  const ink = new Character('ink', 'Bowerman');
  const robot = new Character('robot', 'Zombie');
  winTeam.addAll(ink, robot);
  expect(winTeam.members.size).toBe(2);
});

test('should make an array of members', () => {
  const winTeam = new Team();
  const ink = new Character('ink', 'Bowerman');
  const robot = new Character('robot', 'Zombie');
  winTeam.addAll(ink, robot);
  winTeam.toArray();
  const isArray = Array.isArray(winTeam.members);
  expect(isArray).toBeTruthy();
});
