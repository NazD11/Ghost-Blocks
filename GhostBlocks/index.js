const ghostBind = new KeyBind("Ghost Bind", Keyboard.KEY_NONE, "ChatTriggers")

const setToAir= (x, y, z) => {
    if (!World.isLoaded()) return
    const pos = new BlockPos(x * 1, y * 1, z * 1);
    Client.getMinecraft().func_71410_x().field_71441_e.func_175698_g(pos.toMCBlock())
}

register('tick', () => {
    if (ghostBind.isKeyDown()) {
        if (Player?.lookingAt()?.toString().includes('minecraft:air') || Player?.lookingAt()?.toString().includes('minecraft:chest') || Player?.lookingAt()?.toString().includes('minecraft:trapped_chest') || Player?.lookingAt()?.toString().includes('minecraft:lever') || Player?.lookingAt()?.toString().includes('minecraft:stone_button') || Player?.lookingAt()?.toString().includes('minecraft:skull')) return
        setToAir(Player?.lookingAt()?.getX(), Player?.lookingAt()?.getY(), Player?.lookingAt()?.getZ())
    }
})