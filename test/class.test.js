//creo classe;
class User {
    nome = 'Elisa'
};

test('creo istanza classe', () => {
    const user = new User();
    expect(user).toBeInstanceOf( User);
});